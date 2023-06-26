import React from "react";
import { Container } from "../contaniner/Container";
import styles from "./style.module.css";
import Logo from "../icons/Logo";
import Cart from "../icons/Cart";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <nav className={styles.nav}>
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
            </ul>
            <a href="#">
              <Logo />
            </a>
            <ul className={styles.nav__list}>
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
          <a href="#">
            <Cart />
          </a>
        </div>
      </Container>
    </header>
  );
}
