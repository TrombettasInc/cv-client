import React from "react";
import styles from './ToDo.module.css'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filter-options">
        <p>status:</p>
        <select value={filter} onChange={(e)=> setFilter(e.target.value)} >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <p>A to Z:</p>
        <button onClick={()=> setSort("Asc")}>Asc</button>
        <button onClick={()=> setSort("Desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
