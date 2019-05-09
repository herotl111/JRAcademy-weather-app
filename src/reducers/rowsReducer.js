import {ROW1, ROW2} from '../actions/rowsActions';

const defaultState = {
  rows: ROW1
};

const rows = (state=defaultState, action) => {
  switch(action.type) {
    case ROW1:
      return Object.assign({}, {
        rows: ROW1
      });
    case ROW2:
      return Object.assign({}, {
        rows: ROW2
      });
    default:
      return state;
  }
}

export default rows;