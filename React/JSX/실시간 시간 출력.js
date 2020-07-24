import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function clock(){
    const element = (
        <div>
            <h1> What time is it now? </h1>
            <h2> It is {new Date().toLocaleTimeString()} </h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root'));
}

setInterval(clock, 1000);

serviceWorker.unregister();
