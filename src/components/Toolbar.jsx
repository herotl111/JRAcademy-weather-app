import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className='nav'>
        <div>
          <input className='search-input' />
          <button className='search-btn' />

          <input
            type='button'
            className='temp-switch'
            onClick={this.props.changeUnit}
            value={`º${this.props.unit}`}
          />
        </div>
      </nav>
    );
  }
}

export default Toolbar;
