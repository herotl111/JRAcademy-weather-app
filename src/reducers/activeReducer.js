const defaultState = {
    itemFewClass:"forecast__switch_0",
    itemMoreClass:"forecast__switch_1"
}

const active = (state = defaultState, action) => {
    switch (action.type) {
        case "ACTIVE_FEW" :
        return Object.assign({}, state, {itemFewClass: action.payload.active});
        case "ACTIVE_MORE" :
        return Object.assign({}, state, {itemMoreClass: action.payload.active});
        default:
            return state;
    }        
}

export default active;