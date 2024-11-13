import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ToDo from './Pages/ToDo';
import MultiStep from './Pages2/MultiStep';
import Weather from './Pages3/Weather';
import Translator from './Pages4/Translator';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/multistep" element={<MultiStep />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/translator" element={<Translator />} />
        {/* Other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
