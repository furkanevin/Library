import { createStore, combineReducers } from 'redux';
import categoriesReducer from './reducers/categoriesReducer';
import booksReducer from './reducers/booksReducer';
const rootReducer = combineReducers({
  booksState: booksReducer,
  categoriesState: categoriesReducer,
});
const store = createStore(rootReducer);
export default store;
