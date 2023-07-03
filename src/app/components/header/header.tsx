"use client";

import React, { useState } from "react";
import { Container } from "../contaniner/Container";
import styles from "./style.module.css";
import Logo from "../icons/Logo";
import Cart from "../icons/Cart";
import BurgerButton from "./BurgerButton";
import Nav from "./Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  const { scrollYProgress } = useScroll();
  const margin = useTransform(scrollYProgress, [0, 0.15], [10, 20]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]
  );
  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["blur(0px)", "blur(20px)"]
  );
  const borderWidth = useTransform(scrollYProgress, [0, 0.01, 0.02], [0, 0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.15], [0, 25]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["0 0 0 rgba(0,0,0,0)", "3px 3px 0 rgba(0,0,0,0.12)"]
  );

  const XAnimationsMinus = {
    hidden: { opacity: 0, x: -400 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.8 },
    }),
  };

  const XAnimations = {
    hidden: { opacity: 0, x: 700 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 1.8 },
    }),
  };

  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      whileInView="visible"
      style={{
        margin,
        backgroundColor,
        backdropFilter,
        borderWidth,
        borderStyle: "solid",
        borderColor: "rgb(112, 90, 102)",
        borderRadius,
        boxShadow,
      }}
    >
      <Container>
        <div className={styles.header__box}>
          <Link href="/">
            <Logo />
          </Link>
          <Nav activeState={activeState} />
          <div className={styles.flex__grup}>
            <Link href="/">
              <Cart />
            </Link>
            <BurgerButton onClick={handleClick} activeState={activeState} />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
