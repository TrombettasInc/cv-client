import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes'; 
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes /> 
      <Footer />
    </Router>
  );
}

export default App;
