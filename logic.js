
function calculateShippingCost() {
    let totalPrice = 20;
     let shippingCost;
    if (totalPrice <= 10) {
        shippingCost = 5

    } else {
        shippingCost = 3
    }

    console.log(`your shipping cost is ${shippingCost}`)


}

calculateShippingCost();//calling a function