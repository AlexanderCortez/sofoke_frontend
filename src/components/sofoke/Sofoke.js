import { connect } from 'react-redux';
import { values } from 'lodash';
import { SofokeComponent } from './SofokeComponent';
import { fetchAll, fetchByRangeDate, changeDateRange } from '../../actions/SofokeActions';

const mapStateToProps = state => {
  const { key, data } = state.SofokeReducer;
  return {
    sofoke: values(data[key]),
    startDate: state.SofokeReducer.startDate,
    endDate: state.SofokeReducer.endDate,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAll: forceFetch => dispatch(fetchAll(forceFetch)),
  fetchByRangeDate: () => dispatch(fetchByRangeDate()),
  changeDateRange: ranges => dispatch(changeDateRange(ranges)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SofokeComponent);
