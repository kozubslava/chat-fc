import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

function Header (params) {
  return (
    <header className={styles.hero}>
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
      <div>
      <Link to='/registration'>Registration</Link>
      </div>
      
    </header>
  );
}

export default Header;
