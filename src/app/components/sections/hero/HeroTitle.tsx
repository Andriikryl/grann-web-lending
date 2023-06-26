import React from "react";
import styles from "./style.module.css";
export default function HeroTitle() {
  const text = "GRANN";

  return (
    <h1 className={styles.hero__title}>
      {text.match(/./gu)!.map((char, index) => (
        <span
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
          className={styles.title__word}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
