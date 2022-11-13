import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
const BookDetails = () => {
  const bookId = useParams();
  const dispatch = useDispatch();
  const { booksState, categoriesState, singleState } = useSelector(
    (state) => state
  );
  const { title, isbn, author, publisher, categoryId, isRead } =
    singleState.book;

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
    <div className="component">
      <Header />
      <ul className="align">
        <li>
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
            <figcaption>
              <h1>{title}</h1>
              <span>By {author}</span>
              <p>
                You {isRead ? ' did' : ' didnt'} read this book
                {isRead ? '' : ' yet'}
              </p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default BookDetails;
