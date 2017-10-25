import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouterDOM from 'react-router-dom';
import App from "./components/app";

ReactDOM.render(
    <ReactRouterDOM.BrowserRouter  ><App /></ReactRouterDOM.BrowserRouter>,
    document.getElementById("app-shopify")
);  