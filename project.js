let cart = 0;
let totalPrice = 0;

// Add product to cart
function addToCart(productName, price) {

    cart++;
    totalPrice += price;

    // Update cart count
    document.getElementById("cart-count").innerText = cart;

    // Update total price
    document.getElementById("total-price").innerText = totalPrice;

    // Show message
    document.getElementById("message").innerText =
        productName + " added to cart!";
}


// Clear cart
function clearCart() {

    cart = 0;
    totalPrice = 0;

    document.getElementById("cart-count").innerText = cart;
    document.getElementById("total-price").innerText = totalPrice;

    document.getElementById("message").innerText =
        "Cart has been cleared!";
}