import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Components/HomePage';
import ToDo from './Pages/ToDo';
import MultiStep from './Pages2/MultiStep';
import Weather from './Pages3/Weather';
import Translator from './Pages4/Translator';
import AboutContact from './Components/AboutContact'
import Feedback from './Pages5/Feedback';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<AboutContact />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/multistep" element={<MultiStep />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/translator" element={<Translator />} />
      <Route path="/feedback" element={<Feedback />} />
        {/* Other routes can go here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
