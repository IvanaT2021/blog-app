import React from "react";
import styles from "./HeroButton.module.css";
import { Button } from "@mui/material";

const HeroButton = () => {
  return (
    <div className={styles.HeroButton}>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default HeroButton;
