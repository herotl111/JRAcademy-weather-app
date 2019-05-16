import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import axios from 'axios';

// const mockConditionData = {
//     city: 'Sydney, Australia',
//     weather: 'sunny',
//     temp: {C:29, F:70},
//     humidity: 29,
//     windSpeed: 5,
//     windDirection:'NE'
// };

// const mockForecastData = [
//     {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'11:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'17:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'18:00', high:{C:29, F:70}, low:{C:28, F:68}},
//     {weekday:'Tue', time:'19:00', high:{C:29, F:70}, low:{C:28, F:68}}
// ];

// let conditionData = {};
// let forecastData = [];

// const fetchData = ()=>{
//     return axios.get('http://localhost:4000/api/weather/au/brisbane')
//     .then(response=>{
//         console.log(response.data.data);
//         conditionData = Object.assign({},response.data.data.city, response.data.data.current);
//         forecastData = response.data.data.forecast;
//         console.log(conditionData);
//         console.log(forecastData);
//     }, error=>{
//         console.log(error.message);
//     });
// }

class WeatherChannel extends Component {
    constructor(props) {
        super();
        this.state = {
            cityCondition: {},
            forecast: []
        }
    }

    fetchData = () => {
        return axios.get('http://localhost:4000/api/weather/au/brisbane')
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    cityCondition: Object.assign({}, response.data.data.city, response.data.data.current),
                    forecast: response.data.data.forecast
                })
            }, error => {
                console.log(error.message);
            });
    }

    componentWillMount() {
        this.fetchData();
        console.log(this.state);
    }

    render() {
        const { temp, rows, dispatch } = this.props;
        const { cityCondition, forecast } = this.state;
        return (
            <main>
                <Toolbar
                    dispatch={dispatch}
                    temp={temp} />
                <CityCondition
                    conditionData={cityCondition}
                    temp={temp} />
                <Forecast
                    forecastData={forecast.slice(0, rows)}
                    dispatch={dispatch}
                    rows={rows}
                    temp={temp} />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        temp: state.temp.temp,
        rows: state.rows.rows
    }
}

const ChannelC = connect(mapStateToProps)(WeatherChannel);

export default ChannelC;