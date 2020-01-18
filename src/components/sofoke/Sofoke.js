import { connect } from 'react-redux';
import { values } from 'lodash';
import { SofokeComponent } from './SofokeComponent';
import { fetchAll } from '../../actions/SofokeActions';

const mapStateToProps = state => ({
  sofoke: values(state.SofokeReducer.sofoke2),
});

const mapDispatchToProps = dispatch => ({
  fetchAll: forceFetch => dispatch(fetchAll(forceFetch)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SofokeComponent);
