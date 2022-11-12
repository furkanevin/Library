import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../style.scss';
const AddBook = () => {
  const navigate = useNavigate();
  return (
    <div className="addBook">
      <Header />
      <div className="blur">
        <div className="Modall">
          <h3>Add a Book</h3>
          <form className="row g-5 mt-1 align-items-center">
            <div className="col-md-6">
              <label className="form-label">Book Name</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Author</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-12">
              <label className="form-label">Publisher</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-4">
              <label className="form-label">ISBN</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Category</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Roman</option>
              </select>
            </div>
            <div className="col-4">
              <div className="form-check">
                <input className="form-check-input checkbox" type="checkbox" />
                <label className="form-check-label mt-1 mx-3">Did Read</label>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end mx-1">
              <button type="submit" className="btn  btn-primary buton">
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
