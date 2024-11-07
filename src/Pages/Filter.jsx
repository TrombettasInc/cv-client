import React from "react";
import styles from './ToDo.module.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className={styles.filter}>
      <h2>Filter</h2>
      <div className={styles.filterOptions}>
        <div className={styles.statusContainer}>
          <p className={styles.statusLabel}>Status:</p>
          <select
            className={styles.statusSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
        <div className={styles.sortContainer}>
          <p>A to Z:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
