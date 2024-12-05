import React, { useState } from 'react';
import styles from './ToDo.module.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div>
      <h2 className={styles['Totodo-form']}>Create Task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="task title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.Toinput}
          
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.Toselect} >
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Studies">Studies</option>
        </select>
        <button type="submit" className={styles.Tobutton}>Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
