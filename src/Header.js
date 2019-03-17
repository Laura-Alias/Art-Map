import React from 'react';
import Image from "./images/logo.png"
import "./App.css";



class Header extends React.Component {
    render() {
        return (
        <header>
        <img src={Image} alt="logo"/>
        <h1>Graffiti Map</h1>
        </header>
        )
    }
}



export default Header
