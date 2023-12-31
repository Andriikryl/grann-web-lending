import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Cart from "../../icons/Cart";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export default function StoreItem({
  id,
  name,
  price,
  imgUrl,
  description,
}: StoreItemProps) {
  return (
    <li className={styles.item}>
      <div>
        <Image src={imgUrl} width={393} height={393} alt="image" />
      </div>
      <div className={styles.flex__grup}>
        <h4 className={styles.card__title}>{name}</h4>
        <button className={styles.card__btn}>
          <Cart />
        </button>
      </div>
      <span className={styles.card__desc}>{description}</span>
      <span className={styles.card__desc}>{price}</span>
    </li>
  );
}
