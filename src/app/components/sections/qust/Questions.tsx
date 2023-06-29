"use client";

import React from "react";
import { Container } from "../../contaniner/Container";
import Title from "../../title/Title";
import styles from "./style.module.css";
import Accordion from "./Accordion";
export default function Questions() {
  return (
    <section className={styles.questions}>
      <Container>
        <Title text="Популярні запитання" />
        <Accordion />
      </Container>
    </section>
  );
}
