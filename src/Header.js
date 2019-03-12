import React from 'react';
import Image from "./images/logo.png"
import "./Header.css";



class Header extends React.Component {
    render() {
        return (
        <header>
        <img src={Image} position="center" alt="logo"/> 
        </header>
        )
    }
}



export default Header
