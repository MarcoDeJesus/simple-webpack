// https://reactjs.org/
import React from 'react';
// https://reactjs.org/docs/react-dom.html#render
import { render } from 'react-dom';
import './style.css';

const Greeting = () => {
    return(
        <div>
            <h1>Hello from React!</h1>
            <div id='image'></div>
        </div>
    )
}

render(
    <Greeting />,
    document.getElementById('header')
)