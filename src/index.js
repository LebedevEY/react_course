import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function sayHello (myMessage) {
    const message = myMessage;
    return message;
}

ReactDOM.render(
    <React.StrictMode>
        <App message={sayHello('Hello GB!')} />
    </React.StrictMode>,
    document.getElementById("root")
);
