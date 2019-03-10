import React from 'react';
import Image from "./images/logo.png"
import "./Header.css";
import { style } from './style.js';



class Header extends React.Component {
    render() {
        return (
        <header style={headerStyle}>
        <img src={Image} className="flexLogo" position="center" alt="logo"/> 
        </header>
        )
    }
}

const headerStyle = {
    background: style.backgroundcolor,
    height: 220,
}


export default Header