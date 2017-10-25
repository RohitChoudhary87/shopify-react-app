import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';
import AppHeader from './app-header';
import AppBody from './app-body';

export default function App() {
    return (
        <div>
            <AppHeader />
            <AppBody />
        </div>
    );
};