let cart = [];

function addToCart(button) {
const product = button.parentElement;
const id = product.getAttribute("data-id");
const name = product.getAttribute("data-name");
const price = parseFloat(product.getAttribute("data-price"));

cart.push({ id, name, price });
document.getElementById("cart-count").innerText = cart.length;

alert(`${name} added to cart!`);
}