import React from 'react';

const Forecast = (props) => {
    const { data, unit,items} = props;
    return (
        <section class="weather-forecast">
            <div className="forecast__switch">
                <button onClick={props.switchButtonFew} className={props.switchButtonToFew}>5 items</button>
                <button onClick={props.switchButtonMore} className={props.switchButtonToMore}>10 items</button>
            </div>
            {
                data.slice(0,items).map((element,index)=> {
                    return (
                        <div className="weather-forecast__row" key={index}>
                            <span className="weather-forecast__day">{element.weekday}</span>
                            <span className="weather-forecast__icon">
                                <i className="weather-forecast__icon">{element.time}</i>
                            </span>
                            <span className="weather-forecast__high">{element.high[unit]} {unit}</span>
                            <span className="weather-forecast__low">{element.low[unit]} {unit}</span>
                        </div>
                    )
                    }
                )
            }
        </section>
    );
}

export default Forecast;