import Image from "next/image";
import styles from "./page.module.css";
import OurService from "./components/OurService";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <OurService/>
    <Contact/>
    </>
  );
}
