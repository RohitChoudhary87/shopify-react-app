import * as React from "react";

export default function PromoCodeDetails(props: any) {
    const { value, isValid } = props.promoCode;
    return (
        <section className="apply-promo-code" >
            <div style={{ width: "25%" }}>Enter Promotion Code</div>
            <div style={{ width: "10%" }}>
                <input value={value} onChange={props.changePromoCode} disabled={isValid} />
            </div>
            <div style={{ width: "10%", textAlign: "right" }} >
                <button disabled={!value} onClick={props.applyPromoCode} >
                    {isValid ? 'Remove' : 'Apply'}
                </button>
            </div>
        </section>
    );
};