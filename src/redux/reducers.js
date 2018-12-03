import {combineReducers} from 'redux'

const initXxxState = 0;
function Xxx(pre = initXxxState,action) {
  switch (action.type){

    default:
      return pre
  }
}

const initYyyState = 0;
function Yyy(pre = initYyyState,action) {
  switch (action.type){

    default:
      return pre
  }
}


export default combineReducers({
  Xxx,
  Yyy
})