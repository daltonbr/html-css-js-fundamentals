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

function calculate(box) {
    let quantity = 0;

    if (box.value.length > 0) {
        quantity = parseInt(box.value);
    }

    inventory[box.id].quantity = quantity;

    const total = sum();
    return `${total}.00`;
}

window.addEventListener('DOMContentLoaded', () => {

    const totalContainer = document.getElementById('total-container');
    const inputBoxes = document.querySelectorAll('#calculator input');

    inputBoxes.forEach(box => {
        box.addEventListener('change', () => {
            totalContainer.textContent = calculate(box);
        });

        box.addEventListener('keyup', () => {
            totalContainer.textContent = calculate(box);
        });
    });
});