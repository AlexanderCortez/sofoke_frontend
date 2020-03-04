const commonFormatDate = 'YYYY-MM-DD';
const initalkeyDate = 'day';
const dateRanges = Object.freeze([
  { label: 'Today', value: 'day' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
  { label: 'This Quarter', value: 'quarter' },
  { label: 'This Year', value: 'year' }
]);

export {
  dateRanges,
  commonFormatDate,
  initalkeyDate,
};