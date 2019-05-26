import React from 'react';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, unit } = this.props;
    let params = this.props.data.map(params => {
      return (
        <div className='weather-forecast__row'>
          <span className='weather-forecast__day'>{params.weekday}</span>
          <span className='weather-forecast__icon'>
            <i className='fa fa-clock-o' /> {params.time}
          </span>
          <span className='weather-forecast__high'>
            {params.high[this.props.unit]} {this.props.unit}
          </span>
          <span className='weather-forecast__low'>
            {params.low[this.props.unit]} {this.props.unit}
          </span>
        </div>
      );
    });
    return (
      <section className='weather-forecast'>
        <div className='forecast__switch'>
          <button
            className={`forecast__switch_0 ${this.props.btnShortStyle}`}
            onClick={this.props.changeShortCount}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1 ${this.props.btnLongStyle}`}
            onClick={this.props.changeLongCount}
          >
            10 items
          </button>
        </div>
        <div>{params}</div>
      </section>
    );
  }
}

export default Forecast;
