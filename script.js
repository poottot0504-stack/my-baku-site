function resetCart() {
  if (confirm("カートを空にしますか？")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
}