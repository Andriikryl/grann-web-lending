"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Tg from "../../icons/Tg";
import Fc from "../../icons/Fc";
import Inst from "../../icons/Inst";
import SubTitel from "./SubTitel";
import HeroTitle from "./HeroTitle";
import Btn from "./Btn";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const turgetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: turgetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const XAnimations = {
    hidden: { opacity: 0, x: -700 },
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
  return (
    <motion.section
      className={styles.hero}
      ref={turgetRef}
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
    >
      <Container>
        <motion.div className={styles.inner__box} style={{ scale }}>
          <div className={styles.hero__box}>
            <HeroTitle />
            <SubTitel />
          </div>
          <div className={styles.hero__btn}>
            <motion.div
              className={styles.box__bg}
              variants={XAnimations}
              custom={1}
            >
              <Btn />
            </motion.div>
          </div>
          <div className={styles.social__box}>
            <motion.a
              className={styles.social__link}
              href="#"
              variants={YAnimations}
              custom={1}
            >
              <Tg />
            </motion.a>
            <motion.a
              className={styles.social__link}
              href="#"
              variants={YAnimations}
              custom={2}
            >
              <Fc />
            </motion.a>
            <motion.a
              className={styles.social__link}
              href="#"
              variants={YAnimations}
              custom={3}
            >
              <Inst />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
