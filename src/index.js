// https://reactjs.org/
import React from 'react';
// https://reactjs.org/docs/react-dom.html#render
import { render } from 'react-dom';
import './style.css';

const Greeting = () => <h1>Hello from React!</h1>

render(
    <Greeting />,
    document.getElementById('header')
)