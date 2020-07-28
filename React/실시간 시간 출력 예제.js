import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function clock(){
    const element = (
        <div>
            <h1> What time is it now? </h1>
            <h2> It is {new Date().toLocaleTimeString()} </h2>
                        //현재 시간을 실시간으로 불러옴
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root'));
}

setInterval(clock, 1000);
// 1초마다 clock 함수를 실행함

serviceWorker.unregister();
