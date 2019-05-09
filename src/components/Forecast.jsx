import React from 'react';
import {C} from '../actions/tempActions';
import {ROW1, changeToRow1, changeToRow2} from '../actions/rowsActions';
import "../styles/forecast.css";

const Row = (props)=>{
    return (
        <div className="weather-forecast__row">
            <span className="weather-forecast__row__day">{props.forecastData.weekday}</span>
            <span className="weather-forecast__row__icon">
                <i className="fa fa-clock-o"></i> {props.forecastData.time}
            </span>
            <span className="weather-forecast__row__high">{props.temp===C? `${props.forecastData.high.C} C` : `${props.forecastData.high.F} F`}</span>
            <span className="weather-forecast__row__low">{props.temp===C? `${props.forecastData.low.C} C` : `${props.forecastData.low.F} F`}</span>
        </div>
    );
}

class Forecast extends React.Component {
    handle1 = () => {
        this.props.dispatch(changeToRow1());
    }
    
    handle2 = () => {
        this.props.dispatch(changeToRow2());
    }

    render() {
        const {rows, temp} = this.props;
        let button1, button2;
        if (rows===ROW1) {
            button1 = <button className="weather-forecast__switch__five switch-active">5 items</button>;
            button2= <button className="weather-forecast__switch__ten" onClick={this.handle2}>10 items</button>;
        } else {
            button1 = <button className="weather-forecast__switch__five" onClick={this.handle1}>5 items</button>;
            button2= <button className="weather-forecast__switch__ten switch-active">10 items</button>;
        }
        return (
            <section className="weather-forecast">
                <div className="weather-forecast__switch">
                    {button1}
                    {button2}
                </div>
                {
                    this.props.mockForecastData.map((data, index)=>{
                        return (<Row key={index} temp={temp} forecastData={data} />);
                    })
                }
            </section>
        );
    }
}

export default Forecast;