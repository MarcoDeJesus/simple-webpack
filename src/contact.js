// https://reactjs.org/
import React from 'react';
// https://reactjs.org/docs/react-dom.html#render
import { render } from 'react-dom';

const Contact = () => {
    return(
        <div>
            <h1>This is Contact page</h1>
        </div>
    )
}

render(
    <Contact />,
    document.getElementById('header')
)