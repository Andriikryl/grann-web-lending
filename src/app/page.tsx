import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "./components/contaniner/Container";
import Logo from "./components/icons/Logo";
import Hero from "./components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
