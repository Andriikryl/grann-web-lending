"use client";
import React, { useRef } from "react";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import styles from "./style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import StoreItem from "./StoreItem";
import storeItems from "../../data/items.json";

const XAnimations = {
  hidden: { opacity: 0, x: -1000 },
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

export default function Best() {
  const turgetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: turgetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <motion.section
      className={styles.best}
      style={{ opacity, scale }}
      ref={turgetRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <Container>
        <div>
          <Title text="Бестселлери" />
          <div className={styles.gallery}>
            <motion.ul
              className={styles.wrapper}
              variants={XAnimations}
              custom={1}
            >
              {storeItems.map((item, index) => (
                <StoreItem key={item.id} {...item} />
              ))}
            </motion.ul>
          </div>
          <motion.div
            className={styles.btn__box}
            variants={YAnimations}
            custom={1}
          >
            <button className={styles.best__box}>
              Переглянути весь асортимент
            </button>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
