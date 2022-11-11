import React from 'react';
import { useSelector } from 'react-redux';

const ListBooks = () => {
  const { booksState } = useSelector((state) => state.booksState);
  console.table(booksState);
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
          <tbody className="table-group-divider"></tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default ListBooks;
