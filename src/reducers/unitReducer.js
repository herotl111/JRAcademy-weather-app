// import TO_CELSIUS from '../actions/unitAction';
// import TO_FAHRENHEIT from '../actions/unitAction';
const defaultState = {unit:"C"};

const unit = (state = defaultState,action) => {
    switch (action.type) {
        case "SWITCH_UNIT" :
        return Object.assign({}, state, {count: action.payload.unit});
        default:
            return state;
    }        
}

export default unit;