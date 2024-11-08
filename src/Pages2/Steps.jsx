import React from 'react';
import styles from "./MultiStep.module.css";
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const YourComponent = ({ currentStep, data }) => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
        <AiOutlineStar />
        <p>Review</p>
      </div>
      <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
        <FiSend />
        <p>Submission</p>
      </div>
    </div>
  );
};

export default YourComponent;
