import { createStore, combineReducers } from 'redux';
import categoriesReducer from './reducers/categoriesReducer';
import booksReducer from './reducers/booksReducer';
import singleReducer from './reducers/singleReducer';

const rootReducer = combineReducers({
  booksState: booksReducer,
  categoriesState: categoriesReducer,
  singleState: singleReducer,
});

const store = createStore(rootReducer);

export default store;
