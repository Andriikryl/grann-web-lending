import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Tg from "../../icons/Tg";
import Fc from "../../icons/Fc";
import Inst from "../../icons/Inst";
import SubTitel from "./SubTitel";
import HeroTitle from "./HeroTitle";
import Btn from "./Btn";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner__box}>
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
        </div>
      </Container>
    </section>
  );
}
