import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MapWithForm from './MapWithForm';
import Footer from './Footer';
import Gradient from './Gradient';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Header />
        <Gradient />
        <MapWithForm />
        <Gradient />
        <Footer />
    </div>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
