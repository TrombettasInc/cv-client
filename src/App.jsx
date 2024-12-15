import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes'; // Create a separate component for AnimatedRoutes
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes /> {/* This is where route animations happen */}
      <Footer />
    </Router>
  );
}

export default App;
