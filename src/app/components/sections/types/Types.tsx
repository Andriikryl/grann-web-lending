"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Image from "next/image";
import ImageOne from "./images/type-one.jpg";
import ImageTwo from "./images/type-2.jpg";
import ImageThree from "./images/type-3.jpg";
import ImageFour from "./images/type-4.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Types() {
  const turgetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: turgetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.7, 1],
    ["0%", "-25%", "-55%", "-66%", "-80%"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  return (
    <motion.div
      className={styles.types}
      ref={turgetRef}
      style={{ opacity, x, scale }}
    >
      <Container>
        <ul className={styles.types__box}>
          <li className={styles.type__item}>
            <motion.div className={styles.types__image}>
              <Image
                src={ImageOne}
                width={605}
                height={253}
                alt="image"
              ></Image>
            </motion.div>
            <button className={styles.types__btn}>Торти</button>
          </li>
          <li className={styles.type__item}>
            <div className={styles.types__image}>
              <Image
                src={ImageTwo}
                width={605}
                height={253}
                alt="image"
              ></Image>
            </div>
            <button className={styles.types__btn}>Шу</button>
          </li>
          <li className={styles.type__item}>
            <div className={styles.types__image}>
              <Image
                src={ImageThree}
                width={605}
                height={253}
                alt="image"
              ></Image>
            </div>
            <button className={styles.types__btn}>Тістечка</button>
          </li>
          <li className={styles.type__item}>
            <div className={styles.types__image}>
              <Image
                src={ImageFour}
                width={605}
                height={253}
                alt="image"
              ></Image>
            </div>
            <button className={styles.types__btn}>Піца</button>
          </li>
        </ul>
      </Container>
    </motion.div>
  );
}
