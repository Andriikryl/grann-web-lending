"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import React from "react";
import styles from "./style.module.css";

interface INav {
  activeState: boolean;
}

const XAnimations = {
  hidden: { opacity: 0, x: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export default function Nav({ activeState }: INav) {
  return (
    <motion.nav
      className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
      initial="hidden"
      whileInView="visible"
    >
      <ul className={styles.nav__list}>
        <motion.li
          className={styles.nav__item}
          variants={XAnimations}
          custom={1}
        >
          <a className={styles.nav__link} href="#">
            Бестселлери
          </a>
        </motion.li>
        <motion.li
          className={styles.nav__item}
          variants={XAnimations}
          custom={2}
        >
          <a className={styles.nav__link} href="#">
            Каталог
          </a>
        </motion.li>
        <motion.li
          className={styles.nav__item}
          variants={XAnimations}
          custom={3}
        >
          <a className={styles.nav__link} href="#">
            Доставка
          </a>
        </motion.li>
        <motion.li
          className={styles.nav__item}
          variants={XAnimations}
          custom={4}
        >
          <a className={styles.nav__link} href="#">
            Про мене
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}
