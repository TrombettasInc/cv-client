import React from 'react';
import styles from  './EmbeddedWebsite.module.css';

const EmbeddedWebsite = () => {
  return (
    <div className={styles.Ewcontainer}>
      <iframe
        src="https://jonascv.netlify.app/"
        title="Embedded Website"
        className={styles.Ewiframe}
      />
    </div>
  );
};

export default EmbeddedWebsite;
