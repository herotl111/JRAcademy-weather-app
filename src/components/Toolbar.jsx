import React from 'react';

const Toolbar = (props) => {
    return (
        <nav>
          <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>
          {/* 如何而设置动画效果？？ */}
          <button className="temp-switch" onClick={props.toggle} >             
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddingRight:5 + 'px'}}
            ></i>
            <sup>&deg;</sup>{props.degreeUnit}
          </button>
        </div>
        </nav>
    );
}

export default Toolbar;