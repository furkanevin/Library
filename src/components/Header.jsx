import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././style.scss';
import { useDispatch } from 'react-redux';
const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
  };
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-chevron-down"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Book"
            value={search}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
