import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
