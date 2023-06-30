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

export default function Btn() {
  return (
    <motion.button className={styles.btn} variants={XAnimations} custom={5}>
      До каталогу
    </motion.button>
  );
}
