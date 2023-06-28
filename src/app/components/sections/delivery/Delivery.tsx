import React from "react";
import styles from "./style.module.css";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import Box from "../../icons/Box";
import Bike from "../../icons/Bike";
import Cash from "../../icons/Cash";

export default function Delivery() {
  return (
    <section className={styles.delivery}>
      <Container>
        <Title text="Доставка і оплата" />
        <div className={styles.delivery__box}>
          <ul className={styles.delivery__list}>
            <li className={styles.list__item}>
              <div className={styles.item__img}>
                <Box />
              </div>
              <h4 className={styles.item__title}>Самовивіз</h4>
              <span className={styles.item__descrip}>
                Самовивіз з Печерського р-ну, м. Київ
              </span>
            </li>
            <li className={styles.list__item}>
              <div className={styles.item__img}>
                <Bike />
              </div>
              <h4 className={styles.item__title}>Доставка</h4>
              <span className={styles.item__descrip}>
                Доставка на таксі (за тарифами служби таксі)
              </span>
            </li>
            <li className={styles.list__item}>
              <div className={styles.item__img}>
                <Cash />
              </div>
              <h4 className={styles.item__title}>Передплата</h4>
              <span className={styles.item__descrip}>
                Передплата на картку в розмірі 50% від суми замовлення
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
