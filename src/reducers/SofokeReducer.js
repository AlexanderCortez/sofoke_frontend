import moment from 'moment';
import { GET_SOFOKE2, SET_KEY, SET_DATE_RANGE, SET_DATA_KEY_SOFOKE } from '../actionTypes/SokofeActionTypes';
import { commonFormatDate, initalkeyDate } from '../constants/AppConstants';


const getInitialState = () => {
  const key = initalkeyDate;
  const startDate = moment().startOf(key);
  const endDate = moment().endOf(key);
  const labelStartDate = startDate.format(commonFormatDate);
  const labelEndDate = endDate.format(commonFormatDate);
  const initialKey = `${labelStartDate}&${labelEndDate}`;
  return {
    initialKey,
    startDate,
    endDate,
  };
}

const newState = getInitialState();

const initialState = {
  sofoke2: {},
  error: null,
  key: newState.initialKey,
  startDate: newState.startDate,
  endDate: newState.endDate,
  data: {},
};

const SofokeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === GET_SOFOKE2) {
    return {
      ...state,
      sofoke2: payload,
    };
  }
  if (type === SET_KEY) {
    return {
      ...state,
      key: payload,
    };
  }
  if (type === SET_DATE_RANGE) {
    return {
      ...state,
      ...payload,
    }
  }
  if (type === SET_DATA_KEY_SOFOKE) {
    return {
      ...state,
      data: {
        ...state.data,
        ...payload,
      },
    }
  }
  return state;
};

export default SofokeReducer;
