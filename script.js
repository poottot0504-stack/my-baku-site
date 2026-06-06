function resetCart() {
  if (confirm("カートを空にしますか？")) {
    cartCount = 0;
    localStorage.setItem("cartCount", cartCount);
    document.getElementById("cart-count").textContent = cartCount;
  }
}