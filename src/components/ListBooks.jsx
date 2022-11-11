import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListBooks = () => {
  const { booksState, categoriesState } = useSelector((state) => state);
  return (
    <div className="listBooks container my-5">
      <div className="table-responsive">
        <table
          className="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle"
        >
          <thead className="table-light">
            <tr>
              <th>List No</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>something</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {booksState.books.map((book, index) => {
              const myCategory = categoriesState.categories.find(
                (item) => item.id === book.categoryId
              );
              return (
                <tr key={book.id}>
                  <th>{index + 1}</th>
                  <td>{book?.title}</td>
                  <td>{book?.author}</td>
                  <td>{myCategory?.name}</td>
                  <td>
                    <Link to={`/book-detail/${book.id}`}>Detay</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default ListBooks;
