interface PromoConfig {
    OfferCode: string,
    DiscountPercent: number
};

const promoConfig: Array<PromoConfig> = [
    {
        "OfferCode": "jf10",
        "DiscountPercent": 7,
    },
    {
        "OfferCode": "pb70",
        "DiscountPercent": 2,
    },
    {
        "OfferCode": "kl44",
        "DiscountPercent": 12,
    }
];

export default promoConfig;
