import { connect } from 'react-redux';
import { values } from 'lodash';
import { CookieComponent } from './CookieComponent';
import { fetchAll } from '../../actions/CookieActions';

const mapStateToProps = state => ({
  cookies: values(state.CookieReducer.cookies),
});

const mapDispatchToProps = dispatch => ({
  fetchAll: forceFetch => dispatch(fetchAll(forceFetch)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookieComponent);
