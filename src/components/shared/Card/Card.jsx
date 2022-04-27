import React from "react";
import styles from "./Card.module.css";

const Card = ({title,icon,children}) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={`/images/${icon}.png`} alt="logo" />
        <h1 className={styles.heading}>Weolcome to Codershouse</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
