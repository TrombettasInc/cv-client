import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.module.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        const requestBody = {email, password};

        axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, requestBody)
        .then((response) =>{
            navigate('/') // need to change this to the first project
        })
        .catch((error) =>{
            const errorDescription = error.response?.data?.message || 'Something went wrong!';
            setErrorMessage(errorDescription);
        })
    };

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='black-box'></div>
            <div className='login-form'>
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleLoginSubmit}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                     />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    placeholder='Enter your password'
                    required
                    />
                </div>
                <button type='submit' className='login-button'>Login</button>
            </form>

            </div>

        </div>

    </div>
  )
}

export default Login