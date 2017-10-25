import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';

export default function App() {
    return (
        <header>           
            <ReactRouterDOM.Link to={`/`}>
                Home
            </ReactRouterDOM.Link>
        </header>
    );
};
