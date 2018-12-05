/**
 * Created by 93659 on 2018/12/4.
 */

import {connect} from 'react-redux';
import Register from '../components/register';
import {register} from '../redux/actions';
export default connect(
  state => ({user: state.user}),
  {register}
)(Register);