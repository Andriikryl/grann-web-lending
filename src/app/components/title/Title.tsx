"use client";
import styles from "./style.module.css";
type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return <h3 className={styles.introLine}>{text}</h3>;
}
