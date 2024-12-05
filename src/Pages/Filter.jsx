import React from "react";
import styles from './ToDo.module.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className={styles.Tofilter}>
      <h2>Filter</h2>
      <div className={styles.TofilterOptions}>
        <div className={styles.TostatusContainer}>
          <p className={styles.TostatusLabel}>Status:</p>
          <select
            className={styles.TostatusSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
        <div className={styles.TosortContainer}>
          <p>A to Z:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
