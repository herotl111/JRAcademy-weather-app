const defaultState = {
    itemFewClass:"forecast__switch_0 switch-active",
    itemMoreClass:"forecast__switch_1",
    item:5
}

const active = (state = defaultState, action) => {
    switch (action.type) {
        case "ACTIVE" :
        return Object.assign({}, state, action.payload.active);        
        default:
            return state;
    }        
}

export default active;