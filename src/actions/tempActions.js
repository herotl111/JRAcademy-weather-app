export const C = 'C';
export const F = 'F';

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

// export const changeTemp = (temp) => {
//   if (temp===C) {
//     return {type: F}
//   } else {
//     return {type: C}
//   }
// }