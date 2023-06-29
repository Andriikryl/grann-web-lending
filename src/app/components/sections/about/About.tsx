import React from "react";
import { Container } from "../../contaniner/Container";
import AboutImg from "public/about/about.png";
import Image from "next/image";
import styles from "./style.module.css";
import Title from "../../title/Title";
import { motion, Variants } from "framer-motion";
export default function About() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__box}>
          <div className={styles.about__img}>
            <Image src={AboutImg} width={499} height={749} alt="about images" />
          </div>
          <div className={styles.about__info}>
            <h3 className={styles.about__title}>Про мене</h3>
            <div className={styles.inner__box}>
              <h4 className={styles.about__subTitle}>Анна Кострома</h4>
              <span className={styles.about__subInfo}>
                Засновниця кондитерської Grann Pastry
              </span>
              <span className={styles.about__subInfo}>
                Від хобі до власної справи.
              </span>
              <p className={styles.about__descFir}>
                Я закінчила DGF International Culinary School в Києві, а згодом
                навчалася в одній з найвідоміших шкіл готельного сервісу і
                кулінарії в світі «Le Cordon Bleu» (Франція).Свою справу почала
                після того, як здобула досвід і працювала в одному з найбільших
                кондитерських цехів Грузії (1500 кв.м.).
              </p>
              <p className={styles.about__desc}>
                Наразі започаткувала особистий бренд і будую власний
                кондитерський цех.Моя робота мене надихає. Завдяки моїм
                солодощам, я можу дарувати щасливі моменти для вас!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
