import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {currencyReducer} from './currencyReducer';

export default combineReducers({
  currencyState:currencyReducer,
  routing
})
