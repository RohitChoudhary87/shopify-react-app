import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';
import ShoppingItem from './shopping-item';
import productList from '../../resources/product-info';

export default class ShoppingBag extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
        this.state = {
            shoppingItems: [...productList],
            subtotalMap: {}
        };
    }

    protected updateSubTotal(item: any, price: any) {
        this.setState(prevstate => {
            const subtotalMap = { ...prevstate.subtotalMap };
            subtotalMap[item.ProductName] = +price;
            return {
                subtotalMap
            };
        });
    }

    protected removeItem(item: any) {
        this.setState((prevstate) => {
            let subtotalMap = { ...prevstate.subtotalMap };
            delete subtotalMap[item.ProductName];
            return {
                shoppingItems: prevstate.shoppingItems.filter((sItem: any) => sItem.ProductName !== item.ProductName),
                subtotalMap
            };
        });
    }

    private getSubTotal() {
        const sum = Object.keys(this.state.subtotalMap).reduce((sum, key) => {
            sum += this.state.subtotalMap[key];
            return sum;
        }, 0);

        return sum;
    }

    public render() {
        return (
            <div>
                <h3>Your Shopping Bag</h3><hr/>
                {this.state.shoppingItems.map((item: any) => {
                    return (
                        <ShoppingItem item={item}
                            key={item.ImageName}
                            updateSubTotal={(item: any, price: any) => this.updateSubTotal(item, price)}
                            onRemoveItem={(data: any) => this.removeItem(data)} />
                    );
                })}
                <section className="checkout-bag">
                    <ReactRouterDOM.Link to={{ pathname: "/checkout", state: { subtotal: this.getSubTotal() } }} >
                        <h2>Next</h2>
                    </ReactRouterDOM.Link>
                </section>
            </div >
        );
    }
};