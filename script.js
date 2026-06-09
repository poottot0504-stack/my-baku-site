function resetCart() {
  if (confirm("カートを空にしますか？")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
  document.getElementById("welcome-user").textContent =
  localStorage.getItem("username");
}