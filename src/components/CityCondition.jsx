import React from 'react';
import "../styles/citycondition.css";
import {ReactComponent as Clear} from '../images/clear.svg';
import umberella from "../images/icon-umberella.png";
import wind from "../images/icon-wind.png";
import compass from "../images/icon-compass.png";

const Temp = (props) => {
    if (props.tempSwitch==='c') {
        return (<div className="weather-condition__temp">{`${props.temp.C} c`}</div>);
    } else {
        return (<div className="weather-condition__temp">{`${props.temp.F} f`}</div>);
    }
}

const Forecast = (props) => {
    let condition = props.mockConditionData;
    let tempSwitch = props.tempSwitch;
    return (
        <section className="weather-condition">
            <div className="weather-condition__location">{condition.city}</div>
            <div><Clear />{condition.weather}</div>
            {/* <div className="weather-condition__temp">19 c</div> */}
            <Temp tempSwitch={tempSwitch} temp={condition.temp}/>
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

export default Forecast;