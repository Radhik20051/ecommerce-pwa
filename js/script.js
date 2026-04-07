let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " added to cart!");
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.product + " - ₹" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("totalPrice").textContent = "Total: ₹" + total;
}
