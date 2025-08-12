import Image from "next/image";
import styles from "./page.module.css";
import OurService from "./components/OurService";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
    <Banner/>
    <OurService/>
    </>
  );
}
