import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/peintures">Peintures</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
