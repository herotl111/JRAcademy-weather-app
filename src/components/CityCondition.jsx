import React from 'react';
import iconUmberella from '../images/icon-umberella.png';
import iconWind from '../images/icon-wind.png'
import iconCompass from '../images/icon-compass.png'

const CityCondition = (props) => {
    const {city, weather, temp, humidity, windSpeed, windDirection} = props.conditionData;
    
    let tempDisplay;
    if (props.isCelsius) {
        tempDisplay = temp.c + ' c';
    } else {
        tempDisplay = temp.f + ' f';
    }

    return (
        <div>
        <section className="weather-condition">
            <div className="weather-condition__location">{city}</div>
            <div style={{textAlign: 'center', fontSize: 14 + 'px'}}>{weather}</div>
            <div className="weather-condition__temp">{tempDisplay}</div>            
            <div className="weather-condition__desc">
                <div>
                    <img src={iconUmberella} />
                    <span className="citem">{humidity}%</span>
                </div>
                <div>
                    <img src={iconWind} /> <span className="citem">{windSpeed} km/h</span>
                </div>
                <div>
                <img src={iconCompass} /> <span className="citem">{windDirection}</span>
                </div>
            </div>
        </section>               
        </div>
    );
}

export default CityCondition;