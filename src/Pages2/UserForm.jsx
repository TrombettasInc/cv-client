import React from 'react';
import styles from './MultiStep.module.css';

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className={styles['form-control']}>
        <label htmlFor="name">Name:</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder="enter your name here"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
