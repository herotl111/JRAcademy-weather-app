import React , {Component} from 'react';
import { connect } from 'react-redux';

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
  

class WeatherChannel extends Component{
    
    render(){
        const { unit, active, dispatch } = this.props;
        return(
            <main>
                <Toolbar 
                    unit={unit}
                    dispatch={dispatch}
                />                
                <CityCondition 
                    data={mockConditionData} 
                    unit={unit}    
                    // dispatch={dispatch}            
                 />               
                <Forecast 
                    data={mockForecastData}                     
                    unit={unit}
                    active={active}
                    dispatch={dispatch}
                 />                            
            </main>
        );
    }
}
const mapStateToProps = (state) => {
    return {        
        unit: state.unit.unit,
        active:state.active}
  }

const WeatherChannelC = connect(mapStateToProps)(WeatherChannel);

export default WeatherChannelC;