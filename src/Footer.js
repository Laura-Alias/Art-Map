import React from 'react';
import Image from "./images/google.png"
import "./App.css";

class Footer extends React.Component {
    render() {
        return (
        <footer>
        <p>Made with</p>
        <a href="https://developers.google.com/maps/documentation/?hl=fr" target="_blank" rel="noopener noreferrer"><img src={Image} alt="Google"/></a>
        </footer>
        )
    }
}


export default Footer