import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';
import Home from './home';
import Shop from './shop/shopping-bag';
import Checkout from './checkout/checkout';

export default function AppBody(props: any) {
    return (
        <main>
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path='/' component={Home} />
                <ReactRouterDOM.Route  path='/shopping-bag' component={Shop} />
                <ReactRouterDOM.Route path='/checkout' component={Checkout} />
            </ReactRouterDOM.Switch>
        </main>
    );
};