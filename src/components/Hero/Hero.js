import React from "react";
import Navbar from "./NavBar/NavBar";
import './Hero.modules.css'
import  Button  from "./Button/Button";

const Hero =()=>{
    return(
        <div className="hero">
            <h1>Hello from Hero</h1>
            <Navbar/>
            <Button/>
        </div>
    )
}

export default Hero