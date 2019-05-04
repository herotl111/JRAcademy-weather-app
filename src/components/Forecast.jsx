import React from 'react';


const Forecast = (props) => {
    
    return (
        <div>
            <section className="weather-forecast">
                <div className="forecast__switch">
                    {/* <button className="forecast__switch_0 switch-active" onClick={props.selectQuantityAsThree}>3 items</button>
                    <button className="forecast__switch_1" onClick={props.selectQuantityAsFive}>5 items</button> */}
                    <button 
                        className={(props.displayQuantity === 3) ? ('forecast__switch_0 switch-active') : ('forecast__switch_0')}
                        onClick={props.selectQuantityAsThree}>3 items
                    </button>
                    <button 
                        className={(props.displayQuantity === 5) ? ('forecast__switch_1 switch-active') : ('forecast__switch_1')} 
                        onClick={props.selectQuantityAsFive}>5 items
                    </button>
                </div>

                <Row forecastData = {props.forecastData} celsius = {props.celsius} displayQuantity = {props.displayQuantity} index = {0}/>
                <Row forecastData = {props.forecastData} celsius = {props.celsius} displayQuantity = {props.displayQuantity} index = {1}/>
                <Row forecastData = {props.forecastData} celsius = {props.celsius} displayQuantity = {props.displayQuantity} index = {2}/>
                <Row forecastData = {props.forecastData} celsius = {props.celsius} displayQuantity = {props.displayQuantity} index = {3}/>
                <Row forecastData = {props.forecastData} celsius = {props.celsius} displayQuantity = {props.displayQuantity} index = {4}/>

            </section>
        </div>
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