"use client";
import React from "react";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import styles from "./style.module.css";
import Cart from "../../icons/Cart";
import Image from "next/image";
import ImageOne from "public/images/best-1.jpg";
import ImageTwo from "public/images/best-2.jpg";
import ImageThree from "public/images/best-3.jpg";

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

export default function Best() {
  return (
    <section className={styles.best}>
      <Container>
        <div>
          <Title text="Бестселлери" />
          <div className={styles.gallery}>
            <ul className={styles.wrapper}>
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
            </ul>
          </div>
          <div className={styles.btn__box}>
            <button className={styles.best__box}>
              Переглянути весь асортимент
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
