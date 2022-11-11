import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar  navbar-expand navbar-dark bg-dark">
      <div className="nav navbar-nav">
        <Link to="/" className="nav-item nav-link active" aria-current="page">
          Home
        </Link>
        <a className="nav-item nav-link">Home</a>
      </div>
    </nav>
  );
};

export default Header;
