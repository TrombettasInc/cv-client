import React from "react";
import styles from "./MultiStep.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./UserForm";
import ReviewForm from "./ReviewForm";
import Thanks from "./Thanks";
import { useForm } from "../hooks/useForm";
import Steps from "./Steps";
import { useState } from "react";

const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: ""
};

const MultiStep = () => {

  const [ data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value)=>{
    setData((prev) =>{
        return {...prev, [key]:value};
    })
  }

  const formComponents = [
  <UserForm data={data} updateFieldHandler ={updateFieldHandler} />, 
  <ReviewForm data={data} updateFieldHandler ={updateFieldHandler} />, 
  <Thanks data={data} />
];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className={styles.ReviewApp}>
      <div className={styles.ReviewHeader}>
        <h2>Leave a review</h2>
        <p>
          We are happy with your visit, use this form to evaluate your purchase
        </p>
      </div>
      <div className={styles["Reviewform-container"]}>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles["ReviewInputs-container"]}>{currentComponent}</div>
          <div className={styles.ReviewActions}>
            {!isFirstStep && (
              <button  type="button" onClick={() => changeStep(currentStep -1)}>
                <GrFormPrevious />
                <span  >Back</span>
              </button>
            )}
            {!isLastStep ? (
              <button  type="submit">
                <span>Next</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Send</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStep;
