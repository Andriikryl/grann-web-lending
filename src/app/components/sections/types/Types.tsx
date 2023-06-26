import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Image from "next/image";
import ImageOne from "./images/type-one.jpg";
import ImageTwo from "./images/type-2.jpg";
import ImageThree from "./images/type-3.jpg";
import ImageFour from "./images/type-4.jpg";

export default function Types() {
  return (
    <div className={styles.types}>
      <Container>
        <ul className={styles.types__box}>
          <li className={styles.type__item}>
            <div className={styles.types__image}>
              <Image
                src={ImageOne}
                width={605}
                height={253}
                alt="image"
              ></Image>
            </div>
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
    </div>
  );
}
