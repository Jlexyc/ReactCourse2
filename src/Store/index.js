import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './Items/reducer';
import { appReducer } from './App/reducer';
import { categoriesReducer } from './Category/reducer';

export const store = createStore(combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  app: appReducer,
}))

console.log('store: ', store.getState());