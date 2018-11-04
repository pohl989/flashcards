import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'
import incorrect  from './incorrect'
import correct  from './correct'


const rootReducer = combineReducers({
  user,
  flash,
  correct, 
  incorrect,
})

export default rootReducer;