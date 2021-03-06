/* eslint-disable no-unused-vars, no-loop-func, no-redeclare, eqeqeq, react-hooks/exhaustive-deps, array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { Context } from '../../../context/Provider';
import { fetchHandler } from '../../../utils/fetchHandler';
import { API } from '../../../utils/API';
import {mock_pca_data, computeDim} from '../../../utils/utility';
import { countries_colors } from '../../../utils/colors';
import "./PcaChart.css"
import { MyPcaChart, dbLabelDaily, dbLabelStatic } from './Drawer';
import { CONST } from '../../../utils/const';

const PCA = require('pca-js')
const math = require('mathjs')


function PcaChart(props) {

    const {type, innerHeight, innerWidth} = props;
    var pcaData;

    var min_x = 0, max_x = 0, min_y = 0, max_y = 0;

    const { selectedPeriod, europeData, selectedCountriesData, selectedCountries  } = useContext(Context);

    
    useEffect(() => { 
        if(selectedCountries.length != 0){
            let data = {
                ...selectedPeriod,
                selectedCountries: selectedCountries
            }
            fetchHandler(data, API.METHOD.POST, API.COMPUTE_PCA, createPcaData)
        }
        else{
            drawChart(false, 0); 
        }
    }, [europeData, selectedCountriesData]);

    function createPcaData(selectedData) {
        let pcaMatrix = []
        let countries = []

        console.log(selectedCountries)

        for(var i = 0; i < selectedCountries.length; i++){
            insertPcaEntries(selectedData, pcaMatrix, countries, selectedCountries[i]);
        }  

        // Generate Eigen vectors
        var vectors = PCA.getEigenVectors(pcaMatrix);

        // Matrix of eigenvectors with the first two PCA (2D)
        var vectMat = math.matrix([vectors[0].vector, vectors[1].vector])

        var origMat = math.matrix(pcaMatrix)
        
        // Dimensionality Reduction
        var resMat = math.multiply(origMat, math.transpose(vectMat))

        generateAxisDomain(resMat._data)

        pcaData = countries;

        for(var i = 0; i < selectedCountries.length; i++){
            updateCountryMatrix(countries[i], vectors);
        }  
        drawChart(true, countries);
    }

    function generateAxisDomain(mat){
        for(var i = 0; i < mat.length; i++){
            if(mat[i][0] > max_x) max_x = mat[i][0];
            if(mat[i][0] < min_x) min_x = mat[i][0];
        }

        for(var i = 0; i < mat.length; i++){
            if(mat[i][1] > max_y) max_y = mat[i][1];
            if(mat[i][1] < min_y) min_y = mat[i][1];
        }
    }

    function insertPcaEntries(selectedData, pcaMatrix, countries, country){
        let countryMatrix = [];
        let pcaEntry = [];
        let len = type == CONST.CHART_TYPE.VACCINATIONS ? 10 : 6;
        let count = type == CONST.CHART_TYPE.VACCINATIONS ? 6 : 0;
        for(var z = 0; z < selectedData.length; z++){
            if(selectedData[z]._id.name === country){
                for(var j = count; j < len; j++){
                    var value = selectedData[z][dbLabelDaily[j]]
                    pcaEntry.push(value[0] != null ? value[0] : 0)
                }
                pcaMatrix.push(pcaEntry);
                countryMatrix.push(pcaEntry);
                pcaEntry = []
            }
        }

        countries.push({"country": country, "pca" : countryMatrix});
        console.log(countries)
        console.log(pcaMatrix)

      }

      function updateCountryMatrix(country, vectors){
        // Matrix of eigenvectors with the first two PCA (2D)
        var vectMat = math.matrix([vectors[0].vector, vectors[1].vector])

        var origMat = math.matrix(country.pca)
        
        // Dimensionality Reduction
        var resMat = math.multiply(origMat, math.transpose(vectMat))

        country.pca = resMat._data
      }

    function drawChart(data, countries) {
        //Options for the Radar chart, other than default
        
        var cfg = {
            innerWidth: innerWidth,
            innerHeight: innerHeight,
            range_w: computeDim(260, 250, innerWidth, innerHeight)[0],
            range_h: computeDim(400, 220, innerWidth, innerHeight)[1],
            w: computeDim(1000, 400, innerWidth, innerHeight)[0],
            h: computeDim(1000, 400, innerWidth, innerHeight)[1],
            lw: computeDim(250, 250, innerWidth, innerHeight)[0],
            lh: computeDim(250, 250, innerWidth, innerHeight)[1],
            legend_pos_x: computeDim(480, 20, innerWidth, innerHeight)[0],
            legend_pos_y: computeDim(480, 20, innerWidth, innerHeight)[1],
            max_x: max_x,
            min_x: min_x,
            max_y: max_y,
            min_y: min_y,
            color: countries_colors
        };
        if(data){
            MyPcaChart.draw("#pca_container", pcaData, countries, cfg);
        }
        else{
            MyPcaChart.draw("#pca_container", mock_pca_data, countries, cfg);
        }
        
    }
    return <div id="pca_container"/>;
}

export default PcaChart;