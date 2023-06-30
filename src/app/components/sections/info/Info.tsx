"use client";

import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import InfoImage from "public/info/cake.png";
import Image from "next/image";
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

export default function Info() {
  return (
    <motion.section
      className={styles.info}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <Container>
        <Title text="Чому саме Grann?" />
        <div className={styles.info__box}>
          <motion.div
            className={styles.info__img}
            variants={XAnimations}
            custom={1}
          >
            <Image src={InfoImage} width={605} height={504} alt="cake" />
          </motion.div>
          <motion.div
            className={styles.info__desc}
            variants={XAnimationsRev}
            custom={1}
          >
            <dl>
              <dt className={styles.info__title}>
                ВСІ ІНГРЕДІЄНТИ СВІЖІ ТА ЯКІСНІ!
              </dt>
              <dd className={styles.info__descr}>
                Я замовляю продукти тільки у тих постачальників, які мають
                сертифікати якості.
              </dd>
              <dt className={styles.info__title}>
                МОЖЛИВІСТЬ ЗАМОВИТИ ДЕСЕРТ ЗГІДНО ВАШИХ ПОБАЖАННЬ
              </dt>
              <dd className={styles.info__descr}>
                Якщо з якихось причин ви не вживаєте окремі продукти десерту, є
                можливість зробити замовлення згідно ваших побажаннь.
              </dd>
              <dt className={styles.info__title}>ЗРУЧНА ВАГА ТОРТУ</dt>
              <dd className={styles.info__descr}>
                <p>
                  Не обовязково чекати на свято, щоб замовити смачненьке. Наша
                  кондитерська робить мініторти і десерти.
                </p>
                <p>
                  Мінімальна вага замовлення:Наполеон і медовик - від 0,5
                  кг.Мусові торти - від 0,8 кг.
                </p>
              </dd>
            </dl>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
