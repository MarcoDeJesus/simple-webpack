// https://reactjs.org/
import React from 'react';
// https://reactjs.org/docs/react-dom.html#render
import { render } from 'react-dom';

const About = () => {
    return(
        <div>
            <h1>This is About Page</h1>
        </div>
    )
}

render(
    <About />,
    document.getElementById('header')
)