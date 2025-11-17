const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedCartTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price -= price * 0.10;
    }
    else if (product.category === "fashion") {
        price -= price * 0.05;
    }

    discountedCartTotal += price;
}

if (discountedCartTotal > 50000) {
    discountedCartTotal -= discountedCartTotal * 0.05;
}

let finalTotal = discountedCartTotal;

let originalTotal = cart.reduce((sum, item) => sum + item.price, 0);

console.log("Original Total:", originalTotal);
console.log("Final Total After Discounts:", finalTotal.toFixed(2));
