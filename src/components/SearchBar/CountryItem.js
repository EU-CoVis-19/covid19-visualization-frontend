import "./CountryItem.css"
import FlagButton from "../../components/Buttons/flag/FlagButton";
import { useContext, useState } from "react";
import { Context } from "../../context/Provider";
import { CONST } from "../../utils/const";

const CountryItem = (props) => {

    const { selectedCountries, setSelectedCountries, setSelectedCountriesData, selectedCountriesData } = useContext(Context);
    const population = props.population;
    const cases = props.cases;
    const name = props.name;


    const handleCountrySelection = () => {
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

    const displayCounter = () => {
       let total_population = (population / CONST.MILION).toFixed(1) >= 1 ? (population / CONST.MILION).toFixed(1)+ "M" : (population / CONST.THOUSAND).toFixed(1) + "k"
       let total_cases = (cases / CONST.MILION).toFixed(1) >= 1 ? (cases / CONST.MILION).toFixed(1)+ "M cases" : (cases / CONST.THOUSAND).toFixed(1) + "k cases"
       return `${total_population} - ${total_cases}`
    }

    return (
        <div>
            <ul className="line-wrapper" onClick={handleCountrySelection}>
                <li className="line-element" style={{ margin: 4 }}>
                    <FlagButton height={30} width={30} flagIcon={name ? name.toLowerCase() : "europe"} type={CONST.FLAG_BUTTON.TYPE.SEARCH}/>
                </li>
                <li className="line-element">
                    <ul className="country-wrapper">
                        <li className="country-name">{name}</li>
                        <li className="country-info">
                            <p className="country-info">
                                {displayCounter()}
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default CountryItem;

