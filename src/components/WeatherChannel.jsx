import React , {Component} from 'react';
import {connect} from 'react-redux';
import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

const mockConditionData = {
    city: 'Sydney, Australia',
    weather: 'sunny',
    temp: {C:29, F:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE'
};
 
const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'11:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'17:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'18:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'19:00', high:{C:29, F:70}, low:{C:28, F:68}}
];
 
class WeatherChannel extends Component{
    render(){
        const {temp, rows, dispatch} = this.props;
        return(
            <main>
                <Toolbar 
                dispatch={dispatch} 
                temp={temp} />
                <CityCondition 
                mockConditionData={mockConditionData} 
                temp={temp} />
                <Forecast
                mockForecastData={mockForecastData.slice(0,rows)} 
                dispatch = {dispatch} 
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