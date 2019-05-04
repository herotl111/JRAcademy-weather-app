import React from 'react';

const Toolbar = (props) => {
    return (
        <nav>
            <form className="search-input" action=""></form>            
            <button onClick={props.swapTempUnit} className="temp-switch">°{props.unit}</button>
        </nav>
    );
}

export default Toolbar;