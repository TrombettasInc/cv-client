import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSignupSubmit = (e) =>{
        e.preventDefault();
        const requestBody = {email, password, name};

        axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
        .then((response) =>{
            navigate('/login');
        })
        .catch((error)=>{
            const errorDescription = error.response?.data?.message || 'Something went wrong!';
            setErrorMessage(errorDescription);
        });
    }

  return (
    <div className='signup-page'>
        <div className='signup-container'>
            <div className='signup-form'>
                <h2>Sign up </h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSignupSubmit}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                        required
                        />
                    </div>
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
                    <button type='submit' className='register-button'>Register</button>
                </form>
            </div>
            <div className='black-box'></div>
        </div>
    </div>
  )
}

export default SignUp