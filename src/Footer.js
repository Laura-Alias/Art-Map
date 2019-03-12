import React from 'react';
import Image from "./images/google.png"

class Footer extends React.Component {
    render() {
        return (
        <footer>
        <p>Made with <a href="https://developers.google.com/maps/documentation/?hl=fr" target="_blank" rel="noopener noreferrer"><img src={Image} alt="Google"/></a></p>
        </footer>
        )
    }
}


export default Footer