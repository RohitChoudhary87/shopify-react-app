import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';

export default function Home({ match }: any) {
    return (
        <ReactRouterDOM.Link to={`${match.url}shop`}>
            Go shopping...
        </ReactRouterDOM.Link>
    );
};