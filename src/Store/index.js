import { createStore, combineReducers, applyMiddleware } from 'redux';
import { itemsReducer } from './Items/reducer';
import { appReducer } from './App/reducer';
import { categoriesReducer } from './Category/reducer';
import { setIsRegistered } from './App/actions';
import { updateUserModelAction } from './App/actions';
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const store = createStore(combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  app: appReducer,
}), applyMiddleware(logger) );

const isRegistered = localStorage.getItem('isRegistered');
const userModelJSON = localStorage.getItem('user');
const userModel = JSON.parse(userModelJSON);

console.log('isRegistered: ', isRegistered);
store.dispatch(setIsRegistered(isRegistered === 'true'));
store.dispatch(updateUserModelAction(userModel));