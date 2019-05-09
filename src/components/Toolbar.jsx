import React from 'react';
import {C, changeToC, changeToF} from '../actions/tempActions';
import "../styles/toolbar.css";

class Toolbar extends React.Component {
    handleTempToC = () => {
        this.props.dispatch(changeToC());
    }

    handleTempToF = () => {
        this.props.dispatch(changeToF());
    }

    render() {
        return (
            <nav>
                <input type="text" className="search-input"/>
                <button className="search-btn">
                    <i className="fa fa-search"></i>
                </button>
                <button className="temp-switch" onClick={this.props.temp===C? this.handleTempToF : this.handleTempToC}>
                    <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                    <sup>&deg;</sup>{this.props.temp}
                </button>
            </nav>
        );
    }
}

export default Toolbar;