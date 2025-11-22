// Menu items with prices
var menu = {
    Pizza: 250,
    Burger: 120,
    Pasta: 180,
    Fries: 90,
    Sandwich: 150
};
function calculateBill(orderItems) {
    try {
        var prices = orderItems.map(function(item) {
            if (!menu[item]) {
                throw new Error("Item '" + item + "' is not available in the menu");
            }
            return menu[item];
        });
        var total = prices.reduce(function(acc, val) {
            return acc + val;
        }, 0);
        return "Total Bill: ₹" + total;
    } catch (error) {
        return "Error: " + error.message;
    }
}

console.log(calculateBill(["Pizza", "Burger", "Fries"]));
console.log(calculateBill(["Pasta","momos"]));
