import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import SuggestedCategory from '../components/SuggestedCategory';
import SuggestedRead from '../components/SuggestedRead';
import { useState } from 'react';

const BookDetails = () => {
  const { booksState, categoriesState, singleState } = useSelector(
    (state) => state
  );
  const { id, title, isbn, author, publisher, categoryId, isRead } =
    singleState.book;

  const thisCategory = categoriesState.categories.find(
    (item) => item.id === categoryId
  );
  const bookId = useParams();
  const dispatch = useDispatch();

  //!
  //!

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
  }, [bookId]);
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
                <a className="btn">I read</a>
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
          <h4>{title}</h4>
          <p className="author">By {author}</p>
          <p>
            Type of the book: <span>{thisCategory?.categoryName}</span>
          </p>
          <p>
            ISBN: <span>{isbn}</span>
          </p>
          <p>
            Publisher: <span>{publisher}</span>
          </p>
          <div>
            {isRead ? (
              <p>
                You <span>did</span> read this book
              </p>
            ) : (
              <p>
                You <span> did'nt {''}</span>read this book yet
              </p>
            )}
          </div>
        </div>
      </div>
      {isRead ? (
        <SuggestedCategory
          categoryId={categoryId}
          thisCategory={thisCategory?.categoryName}
        />
      ) : (
        <SuggestedRead />
      )}
    </div>
  );
};

export default BookDetails;
