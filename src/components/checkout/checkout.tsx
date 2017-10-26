import * as React from "react";
import CheckoutDetails from "./checkout-details";
import PromoCodeDetails from "./promo-code-details";
import promoConfig from "../../resources/promo-config";

export default class CheckoutBag extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
        this.state = {
            promoCode: {
                isValid: false,
                value: "",
                discount: 0
            }
        };
    }

    private changePromoCode(e: any) {
        const value = e.target.value;
        this.setState(prevState => {
            return ({
                promoCode: {
                    ...prevState.promoCode,
                    value
                }
            });
        });
    }

    private applyPromoCode(reset: boolean) {
        this.setState((prevState) => {
            if (reset) {
                return {
                    promoCode: {
                        isValid: false,
                        discount: 0,
                        value: ""
                    }
                };
            }

            const promoCode = promoConfig.find((config: any) => config.OfferCode === prevState.promoCode.value);
            if (promoCode)
                return {
                    promoCode: {
                        ...prevState.promoCode,
                        isValid: true,
                        discount: promoCode.DiscountPercent
                    }
                }
        });
    }

    public render() {
        return (
            <div className="checkout-bag">
                <h3>Checkout Your Shopping Bag</h3>
                <hr />
                <PromoCodeDetails
                    promoCode={this.state.promoCode}
                    changePromoCode={(e: any) => this.changePromoCode(e)}
                    applyPromoCode={() => this.applyPromoCode(this.state.promoCode.isValid)} />
                <CheckoutDetails
                    subtotal={this.props.location.state.subtotal}
                    promoCode={this.state.promoCode} />
                <hr />
            </div>
        );
    };
};