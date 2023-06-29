import React from "react";
import styles from "./style.module.css";
import Chevron from "../../icons/Chevron";

export default function Accordion() {
  return (
    <div className={styles.questions__box}>
      <details className={styles.accordion}>
        <summary className={styles.accordion__control}>
          <h3 className={styles.accordion__title}>
            СКІЛЬКИ ЧАСУ ПОТРІБНО ДЛЯ ВИГОТОВЛЕННЯ ЗАМОВЛЕННЯ?
          </h3>
          <span className={styles.accordion__icon}>
            <Chevron />
          </span>
        </summary>
        <div className={styles.accordion__content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </details>
      <details className={styles.accordion}>
        <summary className={styles.accordion__control}>
          <h3 className={styles.accordion__title}>ЧИ Є У ВАС ДОСТАВКА?</h3>
          <span className={styles.accordion__icon}>
            <Chevron />
          </span>
        </summary>
        <div className={styles.accordion__content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </details>
      <details className={styles.accordion}>
        <summary className={styles.accordion__control}>
          <h3 className={styles.accordion__title}>
            ЧИ ГОТУЄТЕ ВИ ТОРТИ З МАСТИКИ?
          </h3>
          <span className={styles.accordion__icon}>
            <Chevron />
          </span>
        </summary>
        <div className={styles.accordion__content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </details>
      <details className={styles.accordion}>
        <summary className={styles.accordion__control}>
          <h3 className={styles.accordion__title}>
            ЧИ МОЖНА ЇСТИ ВАШІ ТОРТИ ДІТЯМ ТА ВАГІТНИМ?
          </h3>
          <span className={styles.accordion__icon}>
            <Chevron />
          </span>
        </summary>
        <div className={styles.accordion__content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </details>
    </div>
  );
}
