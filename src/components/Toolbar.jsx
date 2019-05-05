import React from 'react';

const Toolbar = (props) => {
    return (
        <nav>
            <div style={{flex:1}}>
                <input className="search-input"/>
                <button className="search-btn"><i className="fa fa-search"></i></button>

                <button className="temp-switch">
                    <i
                        className="fa fa-thermometer-empty"
                        aria-hidden="true"
                        style={{'padding-right':'5px'}}
                    ></i>
                    <sup>&deg;</sup>C
                </button>
            </div>
        </nav>
    );
}

export default Toolbar;