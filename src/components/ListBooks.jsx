import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ListBooks = () => {
  const { booksState, categoriesState } = useSelector((state) => state);
  const navigate = useNavigate();
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
            return (
              <tr
                onClick={() => {
                  navigate(`/book-detail/${book.id}`);
                }}
              >
                <td>{book?.title}</td>
                <td>{booksCategory?.name}</td>
                <td>{book?.author}</td>
                <td>{book?.publisher}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
