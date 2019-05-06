import React from 'react';


const Forecast = (props) => {
    const {data, unit} = props;
    return (
        <section className="weather-forecast">
            <div className="forecast__switch">
                <button className="forecast__switch_0 switch-active">5 items</button>
                <button className="forecast__switch_1">10 items</button>
            </div>

            <div className="weather-forecast__row">
                <span className="weather-forecast__day">Fri</span>
                <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 10:00
            </span>
                <span className="weather-forecast__high">19 c</span>
                <span className="weather-forecast__low">8 c</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">Fri</span>
                <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 13:00
            </span>
                <span className="weather-forecast__high">19 c</span>
                <span className="weather-forecast__low">8 c</span>
            </div>

            <div className="weather-forecast__row">
                <span className="weather-forecast__day">Fri</span>
                <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 16:00
            </span>
                <span className="weather-forecast__high">19 c</span>
                <span className="weather-forecast__low">8 c</span>
            </div>
        </section>
    );
}

const Row = (props) => {
    // 以下写法对于数组对象不起作用？
    //const {weekday, time, high, low} = props.forecastData;

    const {forecastData, celsius, index, displayQuantity} = props;

    let displaySetting;
    if ((index + 1) <= displayQuantity) {
        displaySetting = {display: 'flex'};
    } else {
        displaySetting = {display: 'none'};
    }

    let tempHighDisplay = [];
    let tempLowDisplay = [];
    if (celsius === true) {

        for (let i in forecastData) {
            tempHighDisplay[i] = forecastData[i].high.C + ' c';
            tempLowDisplay[i] = forecastData[i].low.C + ' c';
        }

    } else {
        for (let i in forecastData) {
            tempHighDisplay[i] = forecastData[i].high.F + ' f';
            tempLowDisplay[i] = forecastData[i].low.F + ' f';
        }
    }

    return (
        <div className="weather-forecast__row" style = {displaySetting}>
            <span className="weather-forecast__day">{forecastData[index].weekday}</span>
            <span className="weather-forecast__icon">
            <i className="fa fa-clock-o"></i> {forecastData[index].time}
            </span>
            <span className="weather-forecast__high">{tempHighDisplay[index]}</span>
            <span className="weather-forecast__low">{tempLowDisplay[index]}</span>
        </div>        
    );
}

export default Forecast;