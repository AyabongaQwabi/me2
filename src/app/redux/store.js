import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createHistory from 'history/createBrowserHistory'
import * as R from 'ramda';

export const history = createHistory();

const logger = store => next => action => {
  var stateStyles = [
      'background:#009688'
      , 'border-radius:10px'
      , 'color: white'
      , 'display: block'
      , 'text-shadow: none'
      , 'box-shadow: none'
      , 'padding:2px'
      , 'text-align: center'
      , 'font-weight: 400'
  ].join(';');

  var styles = [
    'background:#FF5722'
    , 'border-radius:10px'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: none'
    , 'box-shadow: none'
    , 'padding:3px'
    , 'text-align: center'
    , 'font-weight: bold'
  ].join(';');

  var boldstyles = [
    'font-weight: bold',
    'font-style: italic',
  ].join(';');

  console.groupCollapsed(`\n %c ${action.type}`,styles)
  console.dir(action)
  console.info('%c Prev State', stateStyles)
  const prevState = store.getState();
  console.dir(prevState)
  let result = next(action)
  console.info('%c Next State', stateStyles)
  const nextState = store.getState()
  console.dir(nextState)
  const diff = R.difference(R.values(prevState),R.values(nextState))
  console.log('%c modified '+R.head(R.keys(R.head(diff))),boldstyles)
 
  console.groupEnd()
  return result
}

export function configureStore(initialState = {}) {
 return createStore(
  rootReducer,
   applyMiddleware(thunk, logger)
 );
}