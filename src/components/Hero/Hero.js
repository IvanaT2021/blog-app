import React from "react";
import Navbar from "./NavBar/NavBar";
import './Hero.modules.css'
import  ButtonField  from "./Button/ButtonField";

const Hero =()=>{
    return(
        <div className="hero">
            <h1>Hello from Hero</h1>
            <Navbar/>
            <ButtonField/>
        </div>
    )
}

export default Hero