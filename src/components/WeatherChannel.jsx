import React , {Component} from 'react';

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
 
export default class WeatherChannel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tempSwitch: 'c',
            forecastSwitch: 5
        }
    }

    handleTemp = ()=>{
        if(this.state.tempSwitch==='c') {
            this.setState({tempSwitch: 'f'});
        } else {
            this.setState({tempSwitch: 'c'});
        }
    }

    handleForecast = ()=>{
        if(this.state.forecastSwitch===5) {
            this.setState({forecastSwitch: 10});
        } else {
            this.setState({forecastSwitch: 5});
        }
    }

    render(){
        return(
            <main>
                <Toolbar handleTemp={this.handleTemp} tempSwitch={this.state.tempSwitch} />
                <CityCondition mockConditionData={mockConditionData} tempSwitch={this.state.tempSwitch} />
                <Forecast mockForecastData={mockForecastData} handleForecast={this.handleForecast} forecastSwitch={this.state.forecastSwitch} tempSwitch={this.state.tempSwitch} />
            </main>
        );
    }
}