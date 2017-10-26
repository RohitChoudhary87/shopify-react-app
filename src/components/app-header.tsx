import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';

export default function App() {
    return (
        <header>
            <h1>Shop with us</h1>
            <ReactRouterDOM.Link to={`/`}>
                Home
            </ReactRouterDOM.Link>
        </header>
    );
};
