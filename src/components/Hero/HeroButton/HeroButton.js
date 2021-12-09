import React from "react";
import styles from "./HeroButton.module.css";
import { Button } from "@mui/material";

const HeroButton = () => {
  return (
    <div className={styles.HeroButton}>
      <Button variant="contained" style={{backgroundColor:'grey',width:'150px',height:'50px'}}>Hello World</Button>
    </div>
  );
};

export default HeroButton;
