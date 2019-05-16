import {C, F} from '../constants';

export const changeToC = () => {
  return {
    type: C,
    payload: null
  };
}

export const changeToF = () => {
  return {
    type: F,
    payload: null
  };
}