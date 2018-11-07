import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'
import incorrect  from './incorrect'
import correct  from './correct'
import category from './category'


const rootReducer = combineReducers({
  user,
  flash,
  correct, 
  incorrect,
  category,
})

export default rootReducer;