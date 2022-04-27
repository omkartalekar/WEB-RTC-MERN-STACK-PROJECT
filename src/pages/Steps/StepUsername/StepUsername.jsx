import React from 'react';
import styles from "./StepUsername.module.css";
const StepUsername = ({onNext}) => {
  return (
    <div>
      <h1>StepUsername component</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default StepUsername;
