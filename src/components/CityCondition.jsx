import React from 'react';
import umberella from '../images/icon-umberella.png';
import compass from '../images/icon-compass.png';
import wind from '../images/icon-wind.png';
 

const CityCondition = (props) => {
    const { data, unit}=props;
    return (
        <section class="weather-condition">
            <div className="weather-condition__location">{data.city}</div>
            <div className="weather-condition__weather">{data.weather}</div>
            <div className="weather-condition__temp">{data.temp[unit]} {unit}</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={umberella} alt="umberella"/>
                    <span className="citem">{`${data.humidity}%`}</span>
                </div>
                <div>
                    <img src={wind} alt="wind"/>
                    <span className="citem">{`${data.windSpeed} km/h`}</span>
                </div>
                <div>
                    <img src={compass} alt="compass"/>
                    <span className="citem">{data.windDirection}</span>                
                </div>
            </div>
        </section>
    );
}

export default CityCondition;