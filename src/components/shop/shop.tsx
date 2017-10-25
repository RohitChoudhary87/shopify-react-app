import * as React from "react";
import * as ReactRouterDOM from 'react-router-dom';

const items = [
    {
        "ProductName": "Solid Green Cotton t-shirt",
        "Gender": "Male",
        "ProductPrice": "11",
        "DiscountPercent": "5",
        "ImageName": "T1.jpg"
    },
    {
        "ProductName": "Pink Rainbow Print Girls Tee",
        "Gender": "Female",
        "ProductPrice": "17",
        "DiscountPercent": "2",
        "ImageName": "T2.jpg"
    },
    {
        "ProductName": "Blue Flower Pattern Shirt",
        "Gender": "Male",
        "ProductPrice": "9",
        "DiscountPercent": "10",
        "ImageName": "T3.jpg"
    },
    {
        "ProductName": "Off White Cotton Pant",
        "Gender": "Female",
        "ProductPrice": "13",
        "DiscountPercent": "6",
        "ImageName": "P1.jpg"
    }
];

const ShoppingItem = (props: any, i: number) => {
    return (
        <section key={i} className="shopping-item">
            <div style={{ width: "10%" }}>
                <figure>
                    <img src={"../../assets/" + props.ImageName} alt={props.ProductName} />
                </figure>
            </div>
            <div style={{ width: "30%" }}>{props.ProductName}</div>
            <div style={{ width: "10%" }}> <input value="1" /> </div>
            <div style={{ width: "10%" }}>${props.ProductPrice}</div>
        </section>
    );
}

export default function ShoppingBag() {
    return (
        <div>
            <h3>Your Shopping Bag</h3>
            {items.map(ShoppingItem)}
           
                <ReactRouterDOM.Link to="/checkout"><h4>Checkout</h4></ReactRouterDOM.Link>
        </div>
    );
};