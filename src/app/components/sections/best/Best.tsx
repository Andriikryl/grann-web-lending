"use client";
import React, { useRef } from "react";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import styles from "./style.module.css";
import Cart from "../../icons/Cart";
import Image from "next/image";
import ImageOne from "public/images/best-1.jpg";
import ImageTwo from "public/images/best-2.jpg";
import ImageThree from "public/images/best-3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
  {
    image: ImageOne,
    title: "Мусовий торт “Манго-маракуйя”",
    description: "1200 грн/ 3 кг",
  },
  {
    image: ImageTwo,
    title: "Шоколадне тістечко брауні",
    description: "300 грн/ 3шт",
  },
  {
    image: ImageThree,
    title: "Тістечка Шу",
    description: "400 грн/ 6 шт",
  },
  {
    image: ImageOne,
    title: "Мусовий торт “Манго-маракуйя”",
    description: "1200 грн/ 3 кг",
  },
  {
    image: ImageTwo,
    title: "Шоколадне тістечко брауні",
    description: "300 грн/ 3шт",
  },
  {
    image: ImageThree,
    title: "Тістечка Шу",
    description: "400 грн/ 6 шт",
  },
  {
    image: ImageOne,
    title: "Мусовий торт “Манго-маракуйя”",
    description: "1200 грн/ 3 кг",
  },
  {
    image: ImageTwo,
    title: "Шоколадне тістечко брауні",
    description: "300 грн/ 3шт",
  },
  {
    image: ImageThree,
    title: "Тістечка Шу",
    description: "400 грн/ 6 шт",
  },
];

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
              {products.map((product, index) => (
                <li key={index} className={styles.item}>
                  <div>
                    <Image
                      src={product.image}
                      width={393}
                      height={393}
                      alt="image"
                    />
                  </div>
                  <div className={styles.flex__grup}>
                    <h4 className={styles.card__title}>{product.title}</h4>
                    <button className={styles.card__btn}>
                      <Cart />
                    </button>
                  </div>
                  <span className={styles.card__desc}>
                    {product.description}
                  </span>
                </li>
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
