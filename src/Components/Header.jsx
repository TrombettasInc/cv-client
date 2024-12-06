import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Mainheader}>
      <Link to="/" className={styles.MainheaderTitle}>Roberta Trombetta</Link>
      <Link to="/cv" className={styles.MainheaderTitle}> Curriculum </Link>
    </header>
  );
};

export default Header;
