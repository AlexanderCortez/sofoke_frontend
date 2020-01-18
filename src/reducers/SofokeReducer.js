import { GET_SOFOKE2 } from '../actionTypes/SokofeActionTypes';

const initialState = {
  sofoke2: {},
  error: null,
};

const SofokeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === GET_SOFOKE2) {
    return {
      ...state,
      sofoke2: payload,
    };
  }
  return state;
};

export default SofokeReducer;
