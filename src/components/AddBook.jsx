import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const navigate = useNavigate();
  return (
    <div className="addBook">
      <Header />
      <div className="blur">
        <div className="Modal">
          <h3>Add a Student</h3>
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
