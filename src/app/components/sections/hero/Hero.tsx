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
  return (
    <motion.section className={styles.hero} ref={turgetRef} style={{ opacity }}>
      <Container>
        <motion.div className={styles.inner__box} style={{ scale }}>
          <div className={styles.hero__box}>
            <HeroTitle />
            <SubTitel />
          </div>
          <div className={styles.hero__btn}>
            <div className={styles.box__bg}>
              <Btn />
            </div>
          </div>
          <div className={styles.social__box}>
            <a className={styles.social__link} href="#">
              <Tg />
            </a>
            <a className={styles.social__link} href="#">
              <Fc />
            </a>
            <a className={styles.social__link} href="#">
              <Inst />
            </a>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
