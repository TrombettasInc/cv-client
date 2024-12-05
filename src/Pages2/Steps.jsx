import React from 'react';
import styles from "./MultiStep.module.css";
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const YourComponent = ({ currentStep, data }) => {
  return (
    <div className={styles.Reviewsteps}>
      <div className={`${styles.Reviewstep} ${styles.Reviewactive}`}>
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`${styles.Reviewstep} ${currentStep >= 1 ? styles.Reviewactive : ''}`}>
        <AiOutlineStar />
        <p>Review</p>
      </div>
      <div className={`${styles.Reviewstep} ${currentStep >= 2 ? styles.Reviewactive : ''}`}>
        <FiSend />
        <p>Submission</p>
      </div>
    </div>
  );
};

export default YourComponent;
