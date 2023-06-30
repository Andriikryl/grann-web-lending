"use client";
import React from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
const XAnimations = {
  hidden: { opacity: 0, x: 700 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 1.8 },
  }),
};

export default function SubTitel() {
  return (
    <motion.span className={styles.test} variants={XAnimations} custom={1}>
      авторські
      <span className={styles.slider}>
        <span className={styles.slider__word}>десерти</span>
        <span className={styles.slider__word}>Торти</span>
        <span className={styles.slider__word}>Шу</span>
      </span>
    </motion.span>
  );
}
