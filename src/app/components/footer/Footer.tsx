import React from "react";
import { Container } from "../contaniner/Container";
import Link from "next/link";
import Logo from "../icons/Logo";
import Inst from "../icons/Inst";
import Tg from "../icons/Tg";
import Fc from "../icons/Fc";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__box}>
          <div className={styles.footer__info}>
            <span className={styles.footer__links}>
              с. Хотів, вул. Партизанська 1А
            </span>
            <a className={styles.footer__links} href="#">
              Email: kostromaganna@gmail.com
            </a>
            <a className={styles.footer__links} href="#">
              Tel: +38(099) 987 62 40
            </a>
          </div>
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            <div className={styles.felx__group}>
              <a href="#">
                <Inst />
              </a>
              <a href="#">
                <Fc />
              </a>
              <a href="#">
                <Tg />
              </a>
            </div>
            <span className={styles.footer__links}>
              Політика конфіденційності
            </span>
            <span className={styles.footer__links}>Договір оферти</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
