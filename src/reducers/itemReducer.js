const defaultState = {item:5};

const item = (state = defaultState, action) => {
    switch (action.type) {
        case "SWITCH_item" :
        return Object.assign({}, state, {item: action.payload.itemNum});
        default:
            return state;
    }        
}

export default item;