import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
 
    const navigate = useNavigate();
    
    const handleStartClick = () => {
        navigate('/signup');
    }

  return (
    <div className="homepage">
      <div className="homepage-content">
        <p className="homepage-text">
          Welcome to My Project Portfolio. Explore a journey of creativity, skill, and continuous learning! This website is more than just a collection of projects; it’s a story of my progress, experimentation, and passion for development. Here, you’ll discover a curated curriculum of my work, crafted to showcase everything I can do. Each project represents a unique challenge, a new skill, or a creative solution I've developed along the way. As you navigate through the site, you’ll move project by project, getting a glimpse of my capabilities and growth. I hope you enjoy exploring this journey as much as I’ve enjoyed creating it.
        </p>
        <button onClick={handleStartClick} className='start-button'>
        Let's start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
