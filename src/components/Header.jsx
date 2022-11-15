import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././style.scss';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from './../redux/actions/actionTypes';
import { AiOutlineSearch } from 'react-icons/ai';
const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: actionTypes.bookTypes.SET_SEARCH, payload: search });
  };

  const booksState = useSelector((state) => state.booksState.books);

  const searchFilter = booksState?.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="header">
      <div className="browse">
        <div className="browse-category">
          Browse Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-down"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div className="search-extended">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Book"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </form>
          <div className="search-list ">
            {search
              ? searchFilter.map((book) => {
                  return (
                    <Link
                      className="search-child"
                      to={`/book-detail/${book.id}`}
                      key={book.id}
                      onClick={() => {
                        setSearch('');
                      }}
                    >
                      {book?.title}
                    </Link>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
      <Link to="/" className="header-title">
        read<span>books</span>
      </Link>
      <div className="profile">
        <div className="user-profile">
          <img
            src="https://randomuser.me/api/portraits/women/63.jpg"
            alt=""
            className="user-img"
          />
        </div>
        <div className="profile-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-menu"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          Menu
        </div>
      </div>
    </div>
  );
};

export default Header;
