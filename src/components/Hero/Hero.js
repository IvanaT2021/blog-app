import React from "react";
import NavBar from "./NavBar/NavBar";
import styles from './Hero.module.css'
import  HeroButton  from "./HeroButton/HeroButton";

const Hero =()=>{
    return(
        <div className={styles.Hero}>
            <h1>Hello from Hero</h1>
            <NavBar/>
            <HeroButton/>
        </div>
    )
}

export default Hero