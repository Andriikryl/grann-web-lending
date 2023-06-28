import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import InfoImage from "public/info/cake.png";
import Image from "next/image";

export default function Info() {
  return (
    <section className={styles.info}>
      <Container>
        <Title text="Чому саме Grann?" />
        <div className={styles.info__box}>
          <div className={styles.info__img}>
            <Image src={InfoImage} width={605} height={504} alt="cake" />
          </div>
          <div className={styles.info__desc}>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
