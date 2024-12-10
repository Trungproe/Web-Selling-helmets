
function redirectToCheckout(image, name, price) {
    localStorage.setItem('productImage', image);
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);

    window.location.href = 'thanhtoan.html';
}


 const cartIcon = document.getElementById("cart-count");


 cartIcon.addEventListener("click", function() {
     window.location.href = "cart.html";  // Chuyển hướng đến trang giỏ hàng
 });

 updateCartCount();

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; // Cập nhật số lượng giỏ hàng
}

function addToCart(image, name, price) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const product = { image, name, price };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

