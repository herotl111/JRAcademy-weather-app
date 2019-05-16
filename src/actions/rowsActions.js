import {ROW1, ROW2} from '../constants';

export const changeToRow1 = () => {
  return {
    type: ROW1,
    payload: null
  };
}

export const changeToRow2 = () => {
  return {
    type: ROW2,
    payload: null
  };
}