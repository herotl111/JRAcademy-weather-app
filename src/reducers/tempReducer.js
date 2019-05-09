import {C, F} from '../actions/tempActions';

const defaultState = {
  temp: C
};

const temp = (state=defaultState, action) => {
  switch(action.type) {
    case C:
      return Object.assign({}, {
        temp: C
      });
    case F:
      return Object.assign({}, {
        temp: F
      });
    default:
      return state;
  }
}

export default temp;