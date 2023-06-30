"use client";

import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import Box from "../../icons/Box";
import Bike from "../../icons/Bike";
import Cash from "../../icons/Cash";

import { motion } from "framer-motion";

const XAnimations = {
  hidden: { opacity: 0, x: -700 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 1.8 },
  }),
};
const XAnimationsRev = {
  hidden: { opacity: 0, x: 700 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 1.8 },
  }),
};
const YAnimations = {
  hidden: { opacity: 0, y: 300 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 1.8 },
  }),
};

export default function Delivery() {
  return (
    <motion.section
      className={styles.delivery}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <Container>
        <Title text="Доставка і оплата" />
        <div className={styles.delivery__box}>
          <ul className={styles.delivery__list}>
            <motion.li
              className={styles.list__item}
              variants={XAnimations}
              custom={1}
            >
              <div className={styles.item__img}>
                <Box />
              </div>
              <h4 className={styles.item__title}>Самовивіз</h4>
              <span className={styles.item__descrip}>
                Самовивіз з Печерського р-ну, м. Київ
              </span>
            </motion.li>
            <motion.li
              className={styles.list__item}
              variants={YAnimations}
              custom={2}
            >
              <div className={styles.item__img}>
                <Bike />
              </div>
              <h4 className={styles.item__title}>Доставка</h4>
              <span className={styles.item__descrip}>
                Доставка на таксі (за тарифами служби таксі)
              </span>
            </motion.li>
            <motion.li
              className={styles.list__item}
              variants={XAnimationsRev}
              custom={1}
            >
              <div className={styles.item__img}>
                <Cash />
              </div>
              <h4 className={styles.item__title}>Передплата</h4>
              <span className={styles.item__descrip}>
                Передплата на картку в розмірі 50% від суми замовлення
              </span>
            </motion.li>
          </ul>
        </div>
      </Container>
    </motion.section>
  );
}
