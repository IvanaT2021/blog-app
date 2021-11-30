import React from "react";
import styles from './Main.module.css'
import MainCard  from "./MainCard/MainCard";
const Main =()=>{
    return(
        <div className={styles.Main}>
           <h1>Hello from Main</h1>
           <MainCard/>
        </div>
    )
}

export default Main