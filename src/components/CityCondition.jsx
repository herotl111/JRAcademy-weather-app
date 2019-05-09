import React from 'react';
import "../styles/citycondition.css";
import {C} from '../actions/tempActions';
import {ReactComponent as Clear} from '../images/clear.svg';
import umberella from "../images/icon-umberella.png";
import wind from "../images/icon-wind.png";
import compass from "../images/icon-compass.png";

const Temp = (props) => {
    if (props.temp===C) {
        return (<div className="weather-condition__temp">{`${props.cityTemp.C} C`}</div>);
    } else {
        return (<div className="weather-condition__temp">{`${props.cityTemp.F} F`}</div>);
    }
}

const CityCondition = (props) => {
    let condition = props.mockConditionData;
    let temp = props.temp;
    return (
        <section className="weather-condition">
            <div className="weather-condition__location">{condition.city}</div>
            <div><Clear />{condition.weather}</div>
            <Temp temp={temp} cityTemp={condition.temp}/>
            <div className="weather-condition__desc">
                <div>
                    <img src={umberella} alt="Umberella icon"/>
                    <span className="citem">{condition.humidity}</span>
                </div>
                <div>
                    <img src={wind} alt="Wind icon"/>
                    <span className="citem">{condition.windSpeed}</span>
                </div>
                <div>
                    <img src={compass} alt="Compass icon"/>
                    <span className="citem">{condition.windDirection}</span>
                </div>
            </div>
        </section>
    );
}

export default CityCondition;