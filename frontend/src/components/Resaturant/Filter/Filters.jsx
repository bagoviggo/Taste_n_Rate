import React from "react";
import Price from "./Price";
import Rating from "./Rating";
import styles from "./styles/filters.module.css";

function Filters() {
  return (
    <>
      <div className={styles.filter_container}>
        <Price />
        <Rating />
      </div>
    </>
  );
}

export default Filters;
