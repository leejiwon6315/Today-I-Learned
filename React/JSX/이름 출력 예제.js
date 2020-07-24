import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = function (name){
    return `${name.firstName} ${name.lastName}`;
}
// formatName 함수를 만들어 name 형식에 맞는 내용을 출력함.
// 문자열 출력시 ES6의 백틱을 활용

const name = {
    firstName : "JEEWON",
    lastName : "LEE",
};
const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root'));

serviceWorker.unregister();
