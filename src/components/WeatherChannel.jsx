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
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '12:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '14:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '16:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '18:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '20:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
  },
  {
    weekday: 'Tue',
    time: '22:00',
    high: { C: 29, F: 70 },
    low: { C: 28, F: 68 }
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
        <Forecast data={mockForecastDate} unit='F' />
      </main>
    );
  }
}
