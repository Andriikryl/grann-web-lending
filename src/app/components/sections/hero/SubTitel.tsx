import React from "react";
import styles from "./style.module.css";

export default function SubTitel() {
  return (
    <h1 className={styles.test}>
      авторські
      <span className={styles.slider}>
        <span className={styles.slider__word}>десерти</span>
        <span className={styles.slider__word}>Торти</span>
        <span className={styles.slider__word}>Шу</span>
      </span>
    </h1>
  );
}
