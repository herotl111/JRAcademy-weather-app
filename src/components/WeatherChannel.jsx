import React, { Component } from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import { UNIT } from './globalString';
import axios from 'axios';

// const mockConditionData = {
//   city: 'Brisbane,Australia11',
//   weather: 'sunny',
//   temp: { C: 29, F: 61 },
//   humidity: 29,
//   windSpeed: 5,
//   windDirection: 'NE'
// };

const mockForecastDate = [
  {
    weekday: 'Tue',
    time: '10:00',
    high: { C: 29, F: 69 },
    low: { C: 19, F: 59 }
  },
  {
    weekday: 'Tue',
    time: '12:00',
    high: { C: 30, F: 70 },
    low: { C: 20, F: 60 }
  },
  {
    weekday: 'Tue',
    time: '14:00',
    high: { C: 31, F: 71 },
    low: { C: 21, F: 61 }
  },
  {
    weekday: 'Tue',
    time: '16:00',
    high: { C: 32, F: 72 },
    low: { C: 22, F: 62 }
  },
  {
    weekday: 'Tue',
    time: '18:00',
    high: { C: 28, F: 68 },
    low: { C: 18, F: 58 }
  },
  {
    weekday: 'Tue',
    time: '20:00',
    high: { C: 26, F: 66 },
    low: { C: 16, F: 56 }
  },
  {
    weekday: 'Tue',
    time: '22:00',
    high: { C: 22, F: 62 },
    low: { C: 12, F: 52 }
  }
];

export default class WeatherChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCondition: {
        city: '',
        weather: '',
        temp: '',
        humidity: '',
        windSpeed: '',
        windDirection: ''
      },
      unit: UNIT.C,
      count: 5,
      btnShortStyle: 'switch-active',
      btnLongStyle: ''
    };
  }
  componentDidMount() {
    this.fetchConditionData();
    // axios
    //   .get(`https://cityweather-api.herokuapp.com/api/weather/au/brisbane`)
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({
    //       Focaster: res.data.forecast.simpleforecast.forecastday
    //         .map(obj => {
    //           let rObj = {};
    //           rObj['day'] = obj.date.weekday_short;
    //           rObj['icon'] = 'clear';
    //           rObj['high_temp'] = obj.high.celsius + 'c';
    //           rObj['low_temp'] = obj.low.celsius + 'c';
    //           return rObj;
    //         })
    //         .filter((el, i) => i < 5)
    //     });
    //   });
  }
  fetchConditionData() {
    axios
      .get(`https://cityweather-api.herokuapp.com/api/weather/au/brisbane`)
      .then(res => {
        const data = res.data;
        this.setState({
          weatherCondition: {
            city: data.data.city.name,
            weatherCondition: '',
            temp: {
              C: data.data.current.minCelsius,
              F: data.data.current.minFahrenheit
            },
            humidity: data.data.current.humidity,
            windSpeed: data.data.current.windSpeed,
            windDirection: data.data.current.windDirection
          }
        });
      });
  }
  changeUnit = () => {
    this.setState((preState, props) => {
      if (preState.unit === UNIT.C) {
        return {
          unit: UNIT.F
        };
      } else {
        return {
          unit: UNIT.C
        };
      }
    });
  };

  getSumData = count => {
    return mockForecastDate.slice(0, count);
  };
  changeShortCount = () => {
    this.setState((preState, props) => {
      return {
        count: 5,
        btnShortStyle: 'switch-active',
        btnLongStyle: ''
      };
    });
  };
  changeLongCount = () => {
    this.setState((preState, props) => {
      return {
        count: 10,
        btnShortStyle: '',
        btnLongStyle: 'switch-active'
      };
    });
  };
  render() {
    return (
      <main>
        <Toolbar changeUnit={this.changeUnit} unit={this.state.unit} />
        <CityCondition
          data={this.state.weatherCondition}
          unit={this.state.unit}
        />
        <Forecast
          data={this.getSumData(this.state.count)}
          changeShortCount={this.changeShortCount}
          changeLongCount={this.changeLongCount}
          btnShortStyle={this.state.btnShortStyle}
          btnLongStyle={this.state.btnLongStyle}
          unit={this.state.unit}
        />
      </main>
    );
  }
}
