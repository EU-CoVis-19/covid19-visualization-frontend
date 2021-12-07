/* eslint-disable no-unused-vars, no-loop-func, no-redeclare, eqeqeq, react-hooks/exhaustive-deps, array-callback-return */
import React, { useContext, useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import { Context } from '../../../context/Provider';
//import LoadCountriesTask from "../GeoChart/LoadContriesTask";
import { CONST } from "../../../utils/const";
import { NavItem } from "react-bootstrap";
import useResizeObserver from "./useResizeObserver";
import { computeDim } from "../../../utils/utility";

/**
 * Component that renders a map
 */

function GeoChart(props) {
  const { data, type, innerHeight, innerWidth} = props;
  const { selectedCountries, countries, setSelectedCountries } = useContext(Context);

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelection = (name) => {
    let selectionAux = selectedCountries;
    let selected = selectedCountries.includes(name);

    if(!selected) {
        selectionAux.push(name)
        setSelectedCountries([...selectionAux])
    }
    else {
        setSelectedCountries([...selectionAux.filter((country) => country != name)])
    }
    
  }

  // will be called initially and on every data change
  useEffect(() => {

    //let countryAux = countries.filter((item)=>selectedCountries.includes(item._id));
    //console.log(countryAux);
    
    DrawMap()
  }, [countries, selectedCountries, selectedCountry, data, dimensions]);

  function DrawMap(){
    //console.log(selectedCountriesFiltered)
    const svg = select(svgRef.current)
      .attr("viewBox", [1200, 300, 950, 600])

    //console.log(data.features)
    //console.log(countries)
    let data2 = []
    for(let i=0; i<data.features.length; i++) {
      data2.push({
        ...data.features[i], 
        ...(countries.find((itmInner) => itmInner._id === data.features[i].properties.sovereignt))}
      );
    }
    //console.log(data2) 
  
    //coloring the map
    const minProp = min(data2, feature => type === CONST.CHART_TYPE.VACCINATIONS ? 
      feature.total_vaccinations : feature.total_cases);
    const maxProp = max(data2, feature => type === CONST.CHART_TYPE.VACCINATIONS ? 
      feature.total_vaccinations : feature.total_cases);
    console.log(minProp, maxProp)
    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(["#ccc", type === CONST.CHART_TYPE.VACCINATIONS ? "green" : "blue"]);
    
    
    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane

    var dim1 = computeDim(3.9, 3.2, innerWidth, innerHeight)
    var dim2 = computeDim(1400, 1030, innerWidth, innerHeight)

    console.log(dim1)
    const projection = geoMercator()
      .fitSize([width*dim1[0], height*dim1[1]], data) //2.3 1.8
      .precision(100)
   		.translate([dim2[0],dim2[1]]);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".country")
      .data(data2)
      .join("path")
      .on("click", (e, feature) => {
        handleCountrySelection(feature.properties.sovereignt);
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .duration(1000)
      .attr("fill", feature => colorScale(type === CONST.CHART_TYPE.VACCINATIONS ? 
        feature.total_vaccinations : feature.total_cases))
      .attr("d", feature => pathGenerator(feature));
    // render text
    /*svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      //.attr("stroke-width", lineWidth())
      .text(
        feature =>
          feature &&
             feature.properties.name + ":" + feature.total_cases
        type == CONST.CHART_TYPE.VACCINATIONS 
          ? countriesFiltered[0].total_vaccinations 
          : countriesFiltered[0].total_cases
      )
      .attr("x", 1200) //2000
      .attr("y", 800); //800*/
      
  }

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>  
     
    </div>
  );
}

export default GeoChart;



