import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import Suggesteds from '../components/Suggesteds';
const BookDetails = () => {
  const bookId = useParams();
  const dispatch = useDispatch();
  const { booksState, categoriesState, singleState } = useSelector(
    (state) => state
  );
  const { title, isbn, author, publisher, categoryId, isRead } =
    singleState.book;

  const thisCategory = categoriesState.categories.find(
    (item) => item.id === categoryId
  );
  useEffect(() => {
    dispatch({ type: actionTypes.bookTypes.FETCH_BOOK_START });
    axios
      .get(`http://localhost:3004/books/${bookId.bookId}`)
      .then((res) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOK_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookTypes.FETCH_BOOK_FAIL,
          payload: 'Error : While fetching Single Book',
        });
      });
  }, []);

  return (
    <div className="book-details">
      <Header />
      <div className="book-and-detail">
        <figure className="book">
          <ul className="hardcover_front">
            <li>
              <div className="coverDesign blue">
                <h1>{title}</h1>
                <p>{author}</p>
              </div>
            </li>
            <li></li>
          </ul>
          <ul className="page">
            <li></li>
            <li>
              {isRead ? (
                <p className="writing">You already read this</p>
              ) : (
                <a className="btn" href="#">
                  I read
                </a>
              )}
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hardcover_back">
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine">
            <li></li>
            <li></li>
          </ul>
        </figure>
        <div className="this-details">
          <h4>HEYYYYYYYYYYYYYYYYY</h4>
        </div>
      </div>
      <Suggesteds
        categoryId={categoryId}
        thisCategory={thisCategory?.categoryName}
      />
    </div>
  );
};

export default BookDetails;
