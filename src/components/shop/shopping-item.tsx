import * as React from "react";
import PricingSection from './pricing-section';

const femaleDiscount = 6;

export default class ShoppingItem extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
        this.state = {
            quantity: 1,
            price: 0,
            discountedPrice: 0
        }
    }

    public componentDidMount() {
        const price = this.props.item.ProductPrice;
        const discountedPrice = this.calculateFinalPrice(this.props, price);

        this.setState(() => {
            this.props.updateSubTotal(this.props.item, discountedPrice);
            return {
                price,
                discountedPrice
            };
        });
    }

    private calculateFinalPrice({ item }: any, price: number) {
        let discountPercent = +item.DiscountPercent;
        discountPercent += item.Gender === "Female" ? femaleDiscount : 0;

        return price - ((price * discountPercent) / 100);;

    }

    private onQuantityChange(e: any, props: any) {
        const quantity = +e.target.value;
        const price = quantity * props.item.ProductPrice;
        const discountedPrice = this.calculateFinalPrice(props, price);

        this.setState(() => {
            this.props.updateSubTotal(props.item, discountedPrice);
            return {
                quantity,
                price,
                discountedPrice
            }
        });
    }

    private onRemoveItem(e: any, props: any) {
        e.preventDefault();
        props.onRemoveItem(props.item);
    }

    public render() {
        const props = this.props;

        return (
            <section key={props.item.key} className="shopping-item">
                <div style={{ width: "10%" }}>
                    <img src={"../../assets/" + props.item.ImageName} alt={props.item.ProductName} />
                </div>
                <div style={{ width: "20%" }}>
                    {props.item.ProductName}
                    <section>
                        <a href="#" onClick={(e) => this.onRemoveItem(e, props)}>Remove  </a>
                    </section>
                </div>
                <div style={{ width: "10%" }}>
                    <input value={this.state.quantity} onChange={e => this.onQuantityChange(e, props)} />
                </div>
                <div style={{ width: "10%" }}>
                    <PricingSection price={this.state.price} discountedPrice={this.state.discountedPrice} />
                </div>
            </section>
        );
    }
};