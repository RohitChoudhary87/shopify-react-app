interface ProductInfo {
    ProductName: string,
    Gender: string
    ProductPrice: string
    DiscountPercent: string
    ImageName: string
};

const productList: Array<ProductInfo> = [
    {
        "ProductName": "Solid Green Cotton t-shirt",
        "Gender": "Male",
        "ProductPrice": "50",
        "DiscountPercent": "10",
        "ImageName": "T1.jpg"
    },
    {
        "ProductName": "Pink Rainbow Print Girls Tee",
        "Gender": "Female",
        "ProductPrice": "40",
        "DiscountPercent": "20",
        "ImageName": "T2.jpg"
    },
    {
        "ProductName": "Blue Flower Pattern Shirt",
        "Gender": "Male",
        "ProductPrice": "30",
        "DiscountPercent": "30",
        "ImageName": "T3.jpg"
    },
    {
        "ProductName": "Off White Cotton Pant",
        "Gender": "Female",
        "ProductPrice": "10",
        "DiscountPercent": "40",
        "ImageName": "P1.jpg"
    }
];

export default productList;