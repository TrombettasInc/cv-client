import React from 'react';
import styles from './ToDo.module.css';

const Search = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <h2>Search:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search a task"
      />
    </div>
  );
};

export default Search;
