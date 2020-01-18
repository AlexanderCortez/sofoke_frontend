import axios from 'axios';
import { size } from 'lodash';
import { GET_SOFOKE2 } from '../actionTypes/SokofeActionTypes';

const getAction = (type, payload) => ({
  type, payload,
});

export const fetchAll = (forceFetch) => (dispatch, getState) => {
  const { SofokeReducer: { sofoke2 } } = getState();
  if (size(sofoke2) === 0 || forceFetch) {
    return axios
      .get('/api/sofoke')
      .then((response) => {
        dispatch(getAction(GET_SOFOKE2, response.data));
      });
  }
  return Promise.resolve();
};
