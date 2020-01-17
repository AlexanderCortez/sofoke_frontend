import axios from 'axios';
import { size } from 'lodash';
import { GET_COOKIES } from '../actionTypes/CookieActionTypes';

const getAction = (type, payload) => ({
  type, payload,
});

export const fetchAll = (forceFetch) => (dispatch, getState) => {
  const { CookieReducer: { cookies } } = getState();
  if (size(cookies) === 0 || forceFetch) {
    return axios
      .get('/api/cookies')
      .then((response) => {
        dispatch(getAction(GET_COOKIES, response.data));
      });
  }
  return Promise.resolve();
};
