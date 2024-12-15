import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [showFirstLink, setShowFirstLink] = useState(false);
  const [showSecondLink, setShowSecondLink] = useState(false);

  useEffect(() => {
    // Show the first link after 1000ms
    const firstTimeout = setTimeout(() => {
      setShowFirstLink(true);
    }, 125); // Delay increased to 1 second

    // Show the second link after 2000ms
    const secondTimeout = setTimeout(() => {
      setShowSecondLink(true);
    }, 250); // Delay increased to 2 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <header className={styles.Mainheader}>
      {showFirstLink && (
        <Link to="/" className={`${styles.MainheaderTitle} ${styles.fadeIn}`}>
          Antonia Trombetta
        </Link>
      )}
      {showSecondLink && (
        <Link to="/cv" className={`${styles.MainheaderTitle} ${styles.fadeIn}`}>
          Curriculum
        </Link>
      )}
    </header>
  );
};

export default Header;
