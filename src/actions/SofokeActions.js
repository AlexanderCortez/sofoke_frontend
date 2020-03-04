import axios from 'axios';
import { size, values, orderBy, keyBy } from 'lodash';
import moment from 'moment';
import { GET_SOFOKE2, SET_DATE_RANGE, SET_KEY, SET_DATA_KEY_SOFOKE } from '../actionTypes/SokofeActionTypes';
import { commonFormatDate } from '../constants/AppConstants';

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

const getMergedCountries = (countries = []) => {
  const sameCountries = [];
  countries.forEach((country) => {
    if (!sameCountries.includes(country)) {
      sameCountries.push(country);
    }
  })
  return sameCountries;
}

const parseData = (data = [], todayData = []) => {
  const countries = data.map(d => d.pais);
  const mergedCountries = getMergedCountries(countries);
  let newData = {}; 
  mergedCountries.forEach((country) => {
    const matched = data.filter(d => d.pais === country);
    const matchedAll = todayData.filter(d => d.pais === country);
    newData = {
      ...newData,
      [country] : {
        country,
        quantity: size(matched),
        status: (matched[0] || {}).estado,
        last: size(matchedAll),
      }
    }
  });
  const ordered = orderBy(newData, 'quantity', 'desc');
  return keyBy(ordered, 'country');
}

export const fetchByRangeDate = (startValue, endValue) => (dispatch, getState) => {
  const { SofokeReducer: { data, startDate, endDate } } = getState();
  const labelStartDate = startDate.format(commonFormatDate);
  const labelEndDate = endDate.format(commonFormatDate);
  const newKey = `${labelStartDate}&${labelEndDate}`;
  const storagedData = data[newKey];
  if (!storagedData || size(storagedData) === 0) {
    const today = moment().startOf('day');
    const labelToday = today.format(commonFormatDate);
    const dataToSend = new FormData();
    dataToSend.append('startDate', labelStartDate);
    dataToSend.append('endDate', labelEndDate);
    dataToSend.append('today', labelToday);
    return axios
      .post('/api/sofoke/byDate', dataToSend)
      .then((response) => {
        const newValuesData = values(response.data.new)
        const allValuesData = values(response.data.all)
        const parsedData = parseData(newValuesData, allValuesData);
        const newData = {
          [newKey]: parsedData,
        }
        dispatch(getAction(SET_KEY, newKey));
        dispatch(getAction(SET_DATA_KEY_SOFOKE, newData));
      })
    }
  dispatch(getAction(SET_KEY, newKey));
  return Promise.resolve();
}

export const changeDateRange = (range) => (dispatch) => {
  dispatch(getAction(SET_DATE_RANGE, range));
}
