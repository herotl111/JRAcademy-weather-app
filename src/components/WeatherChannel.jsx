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
    windDirection:'NE',
};

const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'11:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:28, F:68}},
];

export default class WeatherChannel extends Component{
    constructor(props) {
        super(props);
        this.state = {celsius: false, quantity: 3};
    }

    render(){
        return(
            <main>
                <Toolbar />
                <CityCondition data={mockConditionData} unit="C"/>
                <Forecast data={mockForecastData} unit="C"/>
            </main>
        );
    }

    // ！！！！！！！！！！！！！！！！！！!这样写不更新显示！！！！！！！！！！！！！！！！！！！！！
    // toggle = () => {
    //     if (this.state.celsius === true) {
    //         this.state.celsius = false;
    //     } else {
    //         this.state.celsius = true;
    //     }
    //     console.log('this.state.celsius:' + this.state.celsius);
    // };

    // 可以正常工作, 一定要setState
    toggle = () => {
        this.state.celsius === true? this.setState({celsius: false}) : this.setState({celsius: true});
    };

    // 也可以正常工作，但似乎没必要
    // toggle = () => {
    //     this.setState((preState, props) => {
    //         return preState.celsius === true ? {celsius: false} : {celsius: true};
    //     });
    // };

    selectQuantityAsThree = () => {
        this.setState({quantity: 3});
    }

    selectQuantityAsFive = () => {
        this.setState({quantity: 5});
    }

}