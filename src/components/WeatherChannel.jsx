import React , {Component} from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

const mockConditionData = {
    city: 'Sydney, Australia',
    weather: 'sunny',
    temp: {c:29, f:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE',
 };
 
 const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:26, F:60}},
    {weekday:'Tue', time:'11:00', high:{C:29.1, F:71}, low:{C:26.1, F:61}},
    {weekday:'Tue', time:'12:00', high:{C:29.2, F:72}, low:{C:26.2, F:72}},
    {weekday:'Tue', time:'13:00', high:{C:29.3, F:73}, low:{C:26.3, F:73}},
    {weekday:'Tue', time:'14:00', high:{C:29.4, F:74}, low:{C:26.4, F:74}},
    {weekday:'Tue', time:'15:00', high:{C:29.5, F:75}, low:{C:26.5, F:75}},
    {weekday:'Tue', time:'16:00', high:{C:29.6, F:76}, low:{C:26.6, F:76}},
 ];
 
export default class WeatherChannel extends Component{
    constructor(props) {
        super(props);
        this.state = {isCelsius: false, quantity: 3};
    }

    componentWillUpdate() {
        // ？为什么在调用这个函数时，state状态仍然未更新？
        // console.log('componentWillUpdate' + this.state.isCelsius);
        // console.log('componentWillUpdate' + this.state.quantity);
        // const processedForecastDate = mockForecastData.slice(0, this.state.quantity);
        // console.log(processedForecastDate);
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate' + this.state.isCelsius);
        // console.log('componentDidUpdate' + this.state.quantity);

    }
    
    render() {
        // console.log('render' + this.state.isCelsius);
        // console.log('render' + this.state.quantity);
        
        let processedForecastDate = this.procecssForecastData();

        return(
            <main>
                <Toolbar toggle = {this.toggle} degreeUnit = {this.state.isCelsius?'c':'f'}/>
                <CityCondition conditionData = {mockConditionData} isCelsius = {this.state.isCelsius}/>
                <Forecast 
                    selectQuantityAsThree = {this.selectQuantityAsThree}
                    selectQuantityAsFive = {this.selectQuantityAsFive}
                    forecastData = {processedForecastDate} 
                />
            </main>
        );
    }

    // ！！！！！！！！！！！！！！！！！！!这样写不更新显示！！！！！！！！！！！！！！！！！！！！！
    // toggle = () => {
    //     if (this.state.isCelsius === true) {
    //         this.state.isCelsius = false;
    //     } else {
    //         this.state.isCelsius = true;
    //     }
    //     console.log('this.state.isCelsius:' + this.state.isCelsius);
    // };

    // 可以正常工作, 一定要setState
    toggle = () => {
//      this.state.isCelsius === true? this.setState({isCelsius: false}) : this.setState({isCelsius: true});  
        console.log('toggle1' + this.state.isCelsius);
        this.setState((prestate) => ({isCelsius: !prestate.isCelsius}));
        console.log('toggle2' + this.state.isCelsius);  // ？为什么这里的quantity仍然是之前状态
    };

    // 也可以正常工作，但似乎没必要
    // toggle = () => {
    //     this.setState((preState, props) => {
    //         return preState.isCelsius === true ? {isCelsius: false} : {isCelsius: true};
    //     });
    // };

    selectQuantityAsThree = () => {
        console.log('selectQuantityAsThree1' + this.state.quantity);    
        this.setState({quantity: 3});
        console.log('selectQuantityAsThree2' + this.state.quantity); // ？为什么这里的quantity仍然是5
    }

    selectQuantityAsFive = () => {
        console.log('selectQuantityAsFive1' + this.state.quantity);
        this.setState({quantity: 5});
        console.log('selectQuantityAsFive2' + this.state.quantity); // ？为什么这里的quantity仍然是3
    }

    procecssForecastData = () => {
        // 这种写法不能完全拷贝？？
        // let processedForecastDate = mockForecastData.slice(0, this.state.quantity);
        // if (this.state.isCelsius) {
        //     processedForecastDate.forEach((item) => {
        //         item.high = item.high.C + ' c';
        //         item.low = item.low.C + ' c';
        //     });
        // } else {
        //     processedForecastDate.forEach((item) => {
        //         item.high = item.high.F + ' f';
        //         item.low = item.low.F + ' f';
        //     });
        // }
        // console.log(mockForecastData);
        
        if (this.state.isCelsius) {
            return mockForecastData.map((item) => {
            return {
                weekday: item.weekday,
                time: item.time,
                high: item.high.C + ' c',
                low: item.low.C + ' c'
            } 
            }).slice(0, this.state.quantity);
        } else {
            return mockForecastData.map((item) => {
                return {
                    weekday: item.weekday,
                    time: item.time,
                    high: item.high.F + ' f',
                    low: item.low.F + ' f'
                } 
                }).slice(0, this.state.quantity);
        }
    }

}