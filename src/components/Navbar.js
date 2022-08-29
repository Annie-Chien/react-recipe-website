import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar bg-light p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h2>FoodLover</h2>
        </Link>
        <ul className="navbar-nav flex-row gap-3">
          <li>
            <NavLink to="/" className=" nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className=" nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
