import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = function (name){
    return `${name.firstName} ${name.lastName}`;
}

const name = {
    firstName : "JEEWON",
    lastName : "LEE",
};
const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root'));

serviceWorker.unregister();
