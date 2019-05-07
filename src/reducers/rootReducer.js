import { combineReducers } from 'redux';
import item from './itemReducer';
import unit from './unitReducer';
import active from './activeReducer';


const rootReducer = combineReducers(
    {
        item,
        unit,
        active
    }
);
export default rootReducer;