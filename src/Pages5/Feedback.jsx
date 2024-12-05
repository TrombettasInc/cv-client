import React, { useState } from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    CompanyName: "",
    Email: "",
    Feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSuccess = () => {
    alert("Your message was sent with success!");
  };

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>Feedback Form</h1>
        <p className={styles.formSubtitle}>
          If you made it up to here, I am very interested in working for your
          company.
          <br />
          If that's not possible at the moment, I would love to get your
          feedback about what I could improve for the future.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form
          className={styles.formPage}
          action="https://formsubmit.co/antonia.dorazio@gmail.com"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSuccess();
          }}
        >
          <div className={styles.personalDataContainer}>
            <div className={styles.personalData}>
              <label className={styles.formLabel}>Full Name *</label>
              <input
                type="text"
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.personalData}>
              <label className={styles.formLabel}>Company Name *</label>
              <input
                type="text"
                name="CompanyName"
                value={formData.CompanyName}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.personalData}>
              <label className={styles.formLabel}>E-Mail *</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Your Feedback *</label>
            <textarea
              name="Feedback"
              value={formData.Feedback}
              onChange={handleChange}
              required
              className={styles.formTextarea}
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your feedback. I will reply to you as soon as possible!"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="http://localhost:5173/" />

          <div className={styles.formGroup}>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonForm} type="submit">
                Send feedback/or contact me!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
