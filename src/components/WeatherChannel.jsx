import React, { Component } from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

const mockConditionData = {
  city: 'Brisbane,Australia',
  weather: 'sunny',
  temp: { C: 29, F: 61 },
  humidity: 29,
  windSpeed: 5,
  windDirection: 'NE'
};

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
    this.state = { unit: 'C' };
  }
  changeUnit = () => {
    this.setState((preState, props) => {
      if (this.state.unit === 'C') {
        return {
          unit: 'F'
        };
      } else {
        return {
          unit: 'C'
        };
      }
    });
  };
  render() {
    return (
      <main>
        <Toolbar changeUnit={this.changeUnit} unit={this.state.unit} />
        <CityCondition data={mockConditionData} unit={this.state.unit} />
        <Forecast data={mockForecastDate} unit='C' />
      </main>
    );
  }
}
