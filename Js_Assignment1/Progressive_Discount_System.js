let purchaseAmount = 5000
if(purchaseAmount>=10000){
    discountPercent = 25
    discountAmount = (purchaseAmount*discountPercent)/100
    finalPrice = purchaseAmount-discountAmount
    console.log("Original amount",purchaseAmount)
    console.log("Discount percentage",Math.round(discountPercent),"%")
    console.log("Final price after discount",Math.round(finalPrice))
}
else if(purchaseAmount>=5000){
    discountPercent = 15
    discountAmount = (purchaseAmount*discountPercent)/100
    finalPrice = purchaseAmount-discountAmount
    console.log("Original amount",purchaseAmount)
    console.log("Discount percentage",Math.round(discountPercent),"%")
    console.log("Final price after discount",Math.round(finalPrice))
}
else if(purchaseAmount>=2000){
    discountPercent = 5
    discountAmount = (purchaseAmount*discountPercent)/100
    finalPrice = purchaseAmount-discountAmount
    console.log("Original amount",purchaseAmount)
    console.log("Discount percentage",Math.round(discountPercent),"%")
    console.log("Final price after discount",Math.round(finalPrice))
}
else{
    console.log("Original amount",purchaseAmount)
    console.log("No Discount")
    console.log("Final price after discount",finalPrice)
}