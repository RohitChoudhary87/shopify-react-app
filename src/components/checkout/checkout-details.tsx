import * as React from "react";

export default function CheckoutDetails(props: any) {
    const discountValue = props.subtotal * (props.promoCode.isValid ? props.promoCode.discount : 0) / 100;
    return (
        <section className="checkout-details">
            <section>
                <div style={{ width: "35%" }}>Sub total</div>
                <div style={{ width: "10%", textAlign: "right" }}><sup>$</sup>{props.subtotal}</div>
            </section>
            {props.promoCode.isValid &&
                <section>
                    <div style={{ width: "35%" }}>Promo Code <b>{props.promoCode.value}</b> applied</div>
                    <div style={{ width: "10%", textAlign: "right" }}>
                        <sup>$</sup>-{discountValue}
                    </div>
                </section>
            }
            <section>
                <div style={{ width: "35%" }}><b>Estimated Total</b></div>
                <div style={{ width: "10%", textAlign: "right" }}>
                    <b><sup>$</sup>{props.subtotal - discountValue}</b>
                </div>
            </section>
        </section>
    );
};
