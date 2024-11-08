import React, { useState } from 'react';
import styles from './SignUp.module.css'; // Correctly import the CSS module
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response?.data?.message || 'Something went wrong!';
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className={styles['signup-page']}>
      <div className={styles['signup-container']}>
        <div className={styles['signup-form']}>
          <h2>Sign up</h2>
          {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
          <form onSubmit={handleSignupSubmit}>
            <div className={styles['input-group']}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className={styles['input-group']}>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles['input-group']}>
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className={styles['register-button']}>Register</button>
          </form>
        </div>
        <div className={styles['black-box']}></div>
      </div>
    </div>
  );
};

export default SignUp;
