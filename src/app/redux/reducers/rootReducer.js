import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
 simpleReducer,
 routerReducer,
});