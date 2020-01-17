import { GET_COOKIES } from '../actionTypes/CookieActionTypes';

const initialState = {
  cookies: {},
  error: null,
};

const CookieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === GET_COOKIES) {
    return {
      ...state,
      cookies: payload,
    };
  }
  return state;
};

export default CookieReducer;
