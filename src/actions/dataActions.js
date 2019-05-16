import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../constants';

export const fetchData = () => {
  return { type: FETCH_DATA };
}
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      cityCondition: Object.assign(data.city, data.current),
      forecast: data.forecast
    }
  };
}
export const fetchDataFail = (error) => {
  return {
    type: FETCH_DATA_FAIL,
    payload: error.message
  };
}

export const refreshDataAsync = () => {
  return dispatch => {
    dispatch(fetchData());
    return axios.get('http://localhost:4000/api/weather/au/brisbane')
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      }, error => {
        dispatch(fetchDataFail(error));
      });
  }
}