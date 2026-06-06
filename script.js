function resetCart() {
  cartCount = 0;
  localStorage.setItem("cartCount", cartCount);
  document.getElementById("cart-count").textContent = cartCount;
}