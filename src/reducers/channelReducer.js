import {combineReducers} from 'redux';
import temp from './tempReducer';
import rows from './rowsReducer';

const channelReducer = combineReducers({
  temp: temp,
  rows: rows
});

export default channelReducer;