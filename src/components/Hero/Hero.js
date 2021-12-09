import React from "react";
import NavBar from "./NavBar/NavBar";
import styles from "./Hero.module.css";
import HeroButton from "./HeroButton/HeroButton";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <NavBar />
      <HeroButton />
    </div>
  );
};

export default Hero;
