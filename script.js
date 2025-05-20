const inventory = {
    apple: { price: 12, quantity: 0 },
    cherry: { price: 15, quantity: 0 },
    strawberry: { price: 18, quantity: 0 },
};

function sum() {
    let total = 0;
    for (const key in inventory) {
        total += inventory[key].price * inventory[key].quantity;
    }

    // Another way to do it
    // for (const item of Object.values(inventory)) {
    //     total += item.price * item.quantity;
    // }

    // Another way to do it
    // const keys = Object.keys(inventory);
    // keys.forEach(key => {
    //     total += inventory[key].price * inventory[key].quantity
    // });

    return total;
}