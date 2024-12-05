import React from 'react';
import styles from './AboutContact.module.css';

const AboutContact = () => {
  return (
    <div className={styles.Abcontainer}>
    <div className={styles.bentoContainer}>
      <div className={styles.box1}>
        <h1>I'M DIEGO, A DESIGNER AND WEBFLOW DEVELOPER BASED IN BRAZIL.</h1>
      </div>
      <div className={styles.box2}>
        <p>
          I have been building websites for more than 10 years. I always thought that focusing on just one area was not
          much fun, so I learned the whole process: planning, building and launching websites...
        </p>
      </div>
      <div className={styles.box3}>
        <blockquote>
          <p>
            Axon’s digital team was facing a stringent deadline and a complex development request, compounded by the
            fact...
          </p>
          <cite>- Clint McFarlin, Axon</cite>
        </blockquote>
      </div>
      <div className={styles.box4}>
        <button>Back to the Top</button>
      </div>
      <div className={styles.box5}>
        <h3>WEBFLOW DEVELOPMENT</h3>
        <p>Looking for a clean and fast build for your design? I'm your man.</p>
        <button>Pick this Package</button>
      </div>
      <div className={styles.box6}>
        <h3>DESIGN + WEBFLOW</h3>
        <p>Don't have a design? I can create a website in no time.</p>
        <button>Pick this Package</button>
      </div>
      <div className={styles.box7}>
        <h3>The Full Package</h3>
        <p>No logo? No problem. I can also design your brand assets and guidelines.</p>
        <button>Pick this Package</button>
      </div>
    </div>
    </div>
  );
};

export default AboutContact;
