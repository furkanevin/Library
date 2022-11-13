import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from './redux/actions/actionTypes';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //! Fetch Books
    dispatch({ type: actionTypes.bookTypes.FETCH_BOOKS_START });
    axios
      .get('http://localhost:3004/books')
      .then((res) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOKS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOKS_FAIL,
          payload: 'Error : While fetching BOOKS',
        });
      });
    //! Fetch Categories
    dispatch({ type: actionTypes.categoryTypes.FETCH_CATEGORIES_START });
    axios
      .get('http://localhost:3004/categories')
      .then((res) => {
        dispatch({
          type: actionTypes.categoryTypes.FETCH_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryTypes.FETCH_CATEGORIES_FAIL,
          payload: 'Error : While fetching Categories',
        });
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-a-book" element={<AddBook />} />
        <Route path="/book-detail/:bookId" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
