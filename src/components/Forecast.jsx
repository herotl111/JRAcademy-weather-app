import React from 'react';
import "../styles/forecast.css";

const Row = (props)=>{
    if (props.tempSwitch==='c') {
        return (
            <div className="weather-forecast__row">
                <span className="weather-forecast__row__day">{props.forecastData.weekday}</span>
                <span className="weather-forecast__row__icon">
                    <i className="fa fa-clock-o"></i> {props.forecastData.time}
                </span>
                <span className="weather-forecast__row__high">{`${props.forecastData.high.C} c`}</span>
                <span className="weather-forecast__row__low">{`${props.forecastData.low.C} c`}</span>
            </div>
        );
    } else {
        return (
            <div className="weather-forecast__row">
                <span className="weather-forecast__row__day">{props.forecastData.weekday}</span>
                <span className="weather-forecast__row__icon">
                    <i className="fa fa-clock-o"></i> {props.forecastData.time}
                </span>
                <span className="weather-forecast__row__high">{`${props.forecastData.high.F} f`}</span>
                <span className="weather-forecast__row__low">{`${props.forecastData.low.F} f`}</span>
            </div>
        );
    }
    
}

class Forecast extends React.Component {
    render() {
        if (this.props.forecastSwitch===5) {
            return (
                <section className="weather-forecast">
                    <div className="weather-forecast__switch">
                        <button className="weather-forecast__switch__five switch-active">5 items</button>
                        <button className="weather-forecast__switch__ten" onClick={this.props.handleForecast}>10 items</button>
                    </div>
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[0]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[1]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[2]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[3]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[4]} />
                </section>
            );
        } else {
            return (
                <section className="weather-forecast">
                    <div className="weather-forecast__switch">
                        <button className="weather-forecast__switch__five" onClick={this.props.handleForecast}>5 items</button>
                        <button className="weather-forecast__switch__ten switch-active">10 items</button>
                    </div>
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[0]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[1]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[2]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[3]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[4]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[5]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[6]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[7]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[8]} />
                    <Row tempSwitch={this.props.tempSwitch} forecastData={this.props.mockForecastData[9]} />
                </section>
            );
        }
        
    }
}

export default Forecast;