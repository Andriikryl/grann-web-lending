import React from "react";
import styles from "./style.module.css";

interface INav {
  activeState: boolean;
}

export default function Nav({ activeState }: INav) {
  return (
    <nav className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Бестселлери
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Каталог
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Доставка
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Про мене
          </a>
        </li>
      </ul>
    </nav>
  );
}
