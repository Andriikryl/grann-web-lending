import React from "react";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import SocOne from "public/social/soc-1.jpg";
import SocTwo from "public/social/soc-2.jpg";
import SocThree from "public/social/soc-3.jpg";
import SocFour from "public/social/soc-4.jpg";
import SocFive from "public/social/soc-5.jpg";
import SocSix from "public/social/soc-6.jpg";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Social() {
  return (
    <section className={styles.social}>
      <Container>
        <Title text="Instagram" />
        <div className={styles.social__box}>
          <div className={styles.social__image}>
            <Image src={SocOne} width={391} height={391} alt="image" />
          </div>
          <div className={styles.social__image}>
            <Image src={SocTwo} width={391} height={391} alt="image" />
          </div>
          <div className={styles.social__image}>
            <Image src={SocThree} width={391} height={391} alt="image" />
          </div>
          <div className={styles.social__image}>
            <Image src={SocFour} width={391} height={391} alt="image" />
          </div>
          <div className={styles.social__image}>
            <Image src={SocFive} width={391} height={391} alt="image" />
          </div>
          <div className={styles.social__image}>
            <Image src={SocSix} width={391} height={391} alt="image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
