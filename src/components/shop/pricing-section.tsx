import * as React from "react";

export default class PricingSection extends React.Component<any, any> {
    public render() {
        const { discountedPrice, price } = this.props;
        return (
            <span className="pricing-content" >
                < i className={(discountedPrice && price > discountedPrice) ? 'strike-through' : ''}>
                    <sup>$</sup>{price}
                </i >
                ${discountedPrice}
            </span >
        );
    }
};