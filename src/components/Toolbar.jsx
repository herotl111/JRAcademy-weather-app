import React from 'react';
import switchUnit from '../actions/unitAction'

const Toolbar =(props) => {
    const { unit,dispatch} =props;
    const swapTempUnit = () => {
            
        if (unit==="C") {
            return ("F");
        }
        return ("C");            
    }
   

    return (
        <nav>
            <form className="search-input" action=""></form>            
            <button onClick={()=>dispatch(switchUnit(swapTempUnit()))} className="temp-switch">°{unit}</button>
        </nav>
    );
}

export default Toolbar;