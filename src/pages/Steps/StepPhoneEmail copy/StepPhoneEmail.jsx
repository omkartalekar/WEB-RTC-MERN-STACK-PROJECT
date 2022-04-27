import React from 'react';
import styles from "./StepPhoneEmail.module.css";
const StepPhoneEmail = ({onNext}) => {
  return (
    <>
      <h1>StepPhoneEmail component</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
}

export default StepPhoneEmail;
