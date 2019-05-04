import React from 'react';

const Forecast = (props) => {
    const { data, unit} = props;
    return (
        <section class="weather-forecast">
            <div className="forecast__switch">
                <button className="forecast__switch_0 switch-active">5 items</button>
                <button className="forecast__switch_1">10 items</button>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]}</span>
                <span className="weather-forecast__low">{data[0].low[unit]}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]}</span>
                <span className="weather-forecast__low">{data[0].low[unit]}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]}</span>
                <span className="weather-forecast__low">{data[0].low[unit]}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]}</span>
                <span className="weather-forecast__low">{data[0].low[unit]}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]}</span>
                <span className="weather-forecast__low">{data[0].low[unit]}</span>
            </div>
        </section>
    );
}

export default Forecast;