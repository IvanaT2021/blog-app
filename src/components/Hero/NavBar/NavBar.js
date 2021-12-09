import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  const links = [
    {
      id: 1,
      path: "/about",
      text: "ABOUT",
    },
    
    {
      id: 2,
      path: "/contact",
      text: "CONTACT",
    },
   
  
  ];
  return (
    <div>
      <ul className={styles.ulKlasa}>
        {links.map((link) => {
          return <li key={link.id}>
            <NavLink to={link.path}  exact>{link.text}</NavLink></li>;
        })}
      </ul>
    </div>
  );
};

export default NavBar;
