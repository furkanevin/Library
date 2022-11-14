import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import actionTypes from './../redux/actions/actionTypes';
import axios from 'axios';

const ListBooks = () => {
  const { booksState, categoriesState } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then((res) => {
        dispatch({ type: actionTypes.bookTypes.DELETE_BOOK, payload: id });
      })
      .catch((err) => {
        alert('Error while deleting book');
      });
  };
  return (
    <div className="listBooks">
      <div className="buttonHolder">
        <Link to="/add-a-book" className="button-31">
          Add a Book
        </Link>
      </div>
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Book Name</h1>
            </th>
            <th>
              <h1>Category</h1>
            </th>
            <th>
              <h1>Author</h1>
            </th>
            <th>
              <h1>Publisher</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {booksState.books.map((book) => {
            const booksCategory = categoriesState.categories.find(
              (item) => item?.id == book.categoryId
            );
            const { title, id, author, publisher } = book;
            return (
              <>
                <tr
                  onClick={() => {
                    navigate(`/book-detail/${book.id}`);
                  }}
                >
                  <td>{title}</td>
                  <td>{booksCategory?.categoryName}</td>
                  <td>{author}</td>
                  <td>{publisher}</td>
                </tr>
                <button
                  className="del"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  <AiFillDelete />
                </button>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
