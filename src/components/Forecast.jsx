import React from 'react';

const Forecast = (props) => {
    const { data, unit} = props;
    return (
        <section class="weather-forecast">
            <div className="forecast__switch">
                <button onClick={props.switchButtonFew} className={props.switchButtonToFew}>5 items</button>
                <button onClick={props.switchButtonMore} className={props.switchButtonToMore}>10 items</button>
            </div>
            <div className="weather-forecast__row ">
                <span className="weather-forecast__day">{data[0].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[0].time}</i>
                </span>
                <span className="weather-forecast__high">{data[0].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[0].low[unit]} {unit}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[1].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[1].time}</i>
                </span>
                <span className="weather-forecast__high">{data[1].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[1].low[unit]} {unit}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[2].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[2].time}</i>
                </span>
                <span className="weather-forecast__high">{data[2].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[2].low[unit]} {unit}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[3].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[3].time}</i>
                </span>
                <span className="weather-forecast__high">{data[3].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[3].low[unit]} {unit}</span>
            </div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{data[4].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[4].time}</i>
                </span>
                <span className="weather-forecast__high">{data[4].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[4].low[unit]} {unit}</span>
            </div>
            <div className={props.offLabel}>
                <span className="weather-forecast__day">{data[5].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[5].time}</i>
                </span>
                <span className="weather-forecast__high">{data[5].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[5].low[unit]} {unit}</span>
            </div>
            <div className={props.offLabel}>
                <span className="weather-forecast__day">{data[6].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[6].time}</i>
                </span>
                <span className="weather-forecast__high">{data[6].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[6].low[unit]} {unit}</span>
            </div>
            <div className={props.offLabel}>
                <span className="weather-forecast__day">{data[7].weekday}</span>
                <span className="weather-forecast__icon">
                    <i className="weather-forecast__icon">{data[7].time}</i>
                </span>
                <span className="weather-forecast__high">{data[7].high[unit]} {unit}</span>
                <span className="weather-forecast__low">{data[7].low[unit]} {unit}</span>
            </div>
        </section>
    );
}

export default Forecast;