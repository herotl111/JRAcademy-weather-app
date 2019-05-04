import React from 'react';
import "../styles/toolbar.css";

class Toolbar extends React.Component {
    render() {
        return (
            <nav>
                <input type="text" className="search-input"/>
                <button className="search-btn">
                    <i className="fa fa-search"></i>
                </button>
                <button className="temp-switch" onClick={this.props.handleTemp}>
                    <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                    <sup>&deg;</sup>{this.props.tempSwitch}
                </button>
            </nav>
        );
    }
}

export default Toolbar;