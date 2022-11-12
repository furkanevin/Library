import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../style.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import actionTypes from './../redux/actions/actionTypes';

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [isbn, setIsbn] = useState('');
  const [category, setCategory] = useState('1');
  const [isRead, setIsRead] = useState(false);

  const newBook = {
    id: String(new Date().getTime()),
    title: title,
    author: author,
    publisher: publisher,
    isbn: isbn,
    categoryId: category,
    isRead: isRead,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !author || !publisher || !isbn) {
      alert('All fields must be filled');
      return;
    }
    axios
      .post('http://localhost:3004/books', newBook)
      .then((res) => {
        dispatch({ type: actionTypes.bookTypes.ADD_BOOK, payload: newBook });
        navigate('/');
      })
      .catch((err) => {});
  };

  return (
    <div className="addBook">
      <Header />
      <div className="blur">
        <div className="Modall">
          <h3>Add a Book</h3>
          <form
            className="row g-5 mt-1  align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <label className="form-label">Book Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                defaultValue={author}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Publisher</label>
              <input
                type="text"
                className="form-control"
                defaultValue={publisher}
                onChange={(event) => {
                  setPublisher(event.target.value);
                }}
              />
            </div>
            <div className="col-4">
              <label className="form-label">ISBN</label>
              <input
                type="text"
                className="form-control"
                defaultValue={isbn}
                onChange={(event) => {
                  setIsbn(event.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Category</label>
              <select
                id="inputState"
                className="form-select"
                defaultValue={category}
                onSelect={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option selected value="1">
                  Novel
                </option>
                <option value="2">Tale</option>
                <option value="4">Fabl</option>
                <option value="3">Science Fiction</option>
              </select>
            </div>
            <div className="col-4  align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input checkbox mt-4"
                  type="checkbox"
                  value="Read"
                  checked={isRead}
                  onChange={() => {
                    setIsRead(!isRead);
                  }}
                />
                <label className="form-check-label mt-4 mx-3">Did Read</label>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end mx-1">
              <button type="submit" className="buton">
                Save
              </button>
            </div>
          </form>
          <div
            className="close"
            onClick={() => {
              navigate('/');
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
