import React from 'react';

import activeItem from '../actions/activeAction';

const Forecast = (props) => {
    const { data, unit,active, dispatch} = props;
    const itemFewActive={
        itemFewClass:"forecast__switch_0 switch-active",
        itemMoreClass:"forecast__switch_1",
        item:5};
    const itemMoreActive={
        itemFewClass:"forecast__switch_0",
        itemMoreClass:"forecast__switch_1 switch-active",
        item:10};

    return (
        <section class="weather-forecast">
            <div className="forecast__switch">
                <button onClick={() =>dispatch(activeItem(itemFewActive))} className={active.itemFewClass}>5 items</button>
                <button onClick={()=>dispatch(activeItem(itemMoreActive))} className={active.itemMoreClass}>10 items</button>
            </div>
            {
                data.slice(0,active.item).map((element,index)=> {
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