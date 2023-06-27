"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { disperse } from "./anim";
import styles from "./style.module.css";
import { title } from "process";
import { text } from "stream/consumers";

interface TextDipserseProps {
  children: React.ReactNode;
}

function TextDipserse(props: TextDipserseProps): JSX.Element {
  const { children } = props;

  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: React.ReactNode) => {
    let chars: React.ReactNode[] = [];
    if (Array.isArray(children)) {
      children.forEach((el: React.ReactNode, i: number) => {
        chars.push(splitWord((el as React.ReactElement).props.children, i));
      });
    } else {
      chars.push(splitWord((element as React.ReactElement).props.children, 1));
    }
    return chars;
  };

  const splitWord = (word: string, indexOfWord: number) => {
    let chars: React.ReactNode[] = [];
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave(false);
      }}
      className={styles.introLine}
    >
      {getChars(children)}
    </div>
  );
}

export default function Title({ text }): JSX.Element {
  return (
    <TextDipserse>
      <h3>{text}</h3>
    </TextDipserse>
  );
}
