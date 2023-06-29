import About from "./components/sections/about/About";
import Best from "./components/sections/best/Best";
import Delivery from "./components/sections/delivery/Delivery";
import Hero from "./components/sections/hero/Hero";
import Info from "./components/sections/info/Info";
import Types from "./components/sections/types/Types";

export default function Home() {
  return (
    <>
      <Hero />
      <Types />
      <Best />
      <Info />
      <Delivery />
      <About />
    </>
  );
}
