/*
 作用：根据之前的状态（previousState）和更新数据的行为（action）产生一个新的状态（newState）
 */
import {combineReducers} from 'redux';

import {AUTH_SUCCESS, AUTH_ERROR} from './action-types';

const initUserState = {
  username: '',
  type: '',
  _id: '',
  errMsg: '',
  redirectTo: '',
  header:'',
  post:'',
  company:'',
  info:'',
  salary:''
};

function user(previousState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {...action.data, redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case AUTH_ERROR :
      return {...initUserState, ...action.data};
    default :
      return previousState;
  }
}

const initYyyState = {};
function yyy(previousState = initYyyState, action) {
  switch (action.type) {
    default :
      return previousState;
  }
}

function getRedirectPath(type, header) {
  let path = '';

  if (type === 'laoban') {
    path = '/laoban';
  } else {
    path = '/dashen';
  }

  if (!header) {
    path += 'info';
  }

  return path;
}


export default combineReducers({
  user
})