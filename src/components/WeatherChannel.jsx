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
            switchButtonMore:"forecast__switch_1",
            items:5
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
    switchLabelMore =() => {       
        this.setState ((preState, props) =>{
            
            return ({items:10,
                    switchButtonFew:"forecast__switch_0",
                    switchButtonMore:"forecast__switch_1 switch-active"
                    });            
        });
    }
    switchLabelFew =() => {
        this.setState ((preState, props) => {
        return ({items:5,
            switchButtonFew:"forecast__switch_0 switch-active",
            switchButtonMore:"forecast__switch_1"
            })
        })
    }


    render(){
        // let items = this.state.items;
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
                    items={this.state.items}
                    unit={this.state.unit}
                    switchButtonToFew={this.state.switchButtonFew}
                    switchButtonToMore={this.state.switchButtonMore}                    
                    switchButtonFew={this.switchLabelFew}
                    switchButtonMore={this.switchLabelMore}
                 />                 
            </main>
        );
    }
}