import React , {Component} from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

// mockdata
const mockConditionData = {
    city: 'Sydney, Australia',
    weather: 'sunny',    
    temp: {C:29, F:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE',
  };
  
  
  const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'11:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'17:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'18:00', high:{C:29, F:70}, low:{C:18, F:58}},
    {weekday:'Tue', time:'19:00', high:{C:29, F:70}, low:{C:18, F:58}},
  ];
  

export default class WeatherChannel extends Component{
    constructor(props) {
        super(props);
        this.state={
            unit:"C",
            switchButtonFew:"forecast__switch_0 switch-active",
            switchButtonMore:"forecast__switch_0",
            offLabel:"weather-forecast__row onoffswitch-checkbox"
        };
    }
    
    swapTempUnit = () => {
        this.setState ((preUnit, props) => {
            if (preUnit.unit==="C") {
                return ({unit:"F",});
            }
            return ({unit:"C"});            
            });
    }
    swtichLabel =() => {
        
        this.setState ((preState, props) =>{
            if (preState.offLabel==="weather-forecast__row onoffswitch-checkbox" 
            && preState.switchButtonFew==="forecast__switch_0 switch-active")   
            {return ({offLabel:"weather-forecast__row",
                    switchButtonFew:"forecast__switch_0",
                    switchButtonMore:"forecast__switch_0 switch-active"
                    });}
            
            return ({offLabel:"weather-forecast__row onoffswitch-checkbox",
            switchButtonFew:"forecast__switch_0 switch-active",
            switchButtonMore:"forecast__switch_0"
            })
        });
    }
    render(){
        return(
            <main>
                <Toolbar 
                    swapTempUnit={this.swapTempUnit}
                    unit={this.state.unit}
                />                
                <CityCondition 
                    data={mockConditionData} 
                    unit={this.state.unit}                
                 />               
                <Forecast 
                    data={mockForecastData} 
                    unit={this.state.unit}
                    offLabel={this.state.offLabel}
                    swtichLabel={this.swtichLabel}
                 />                 
            </main>
        );
    }
}