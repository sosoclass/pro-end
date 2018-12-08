/**
 * Created by 93659 on 2018/12/7.
 */
import {connect} from 'react-redux';
import Chat from '../components/chat';
import {sendMessage} from '../redux/actions';
export default connect(
  state => ({chatMessages: state.chatMessages}),
  {sendMessage}
)(Chat);