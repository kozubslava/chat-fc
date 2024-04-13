import React from 'react';
import { Link } from 'react-router-dom';

function Header (params) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>User profile</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
