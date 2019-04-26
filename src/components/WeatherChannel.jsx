import React , {Component} from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

export default class WeatherChannel extends Component{
    render(){
        return(
            <main>
                <Toolbar />
                <CityCondition />
                <Forecast />
            </main>
        );
    }
}