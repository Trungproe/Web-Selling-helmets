const cartContainer = document.getElementById("cart-container");
const checkoutBtn = document.getElementById("checkout-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const renderCart = () => {
    cartContainer.innerHTML = ""; // Xóa nội dung cũ
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
        return;
    }

    cart.forEach((item, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");
        productDiv.innerHTML = `
            <input type="checkbox" class="select-item" data-index="${index}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h2>${item.name}</h2>
                <p>Cost: ${item.price} VND</p>
            </div>
            <button class="remove-item" data-index="${index}">Delete</button>
        `;
        cartContainer.appendChild(productDiv);
    });
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const clearCart = () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const index = e.target.dataset.index;
        removeFromCart(index);
    }
});

checkoutBtn.addEventListener("click", () => {
    const selectedItems = [];
    document.querySelectorAll(".select-item:checked").forEach((checkbox) => {
        const index = checkbox.dataset.index;
        selectedItems.push(cart[index]);
    });

    if (selectedItems.length === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán.");
        return;
    }

    alert(
        `Bạn đã chọn thanh toán cho các sản phẩm:\n${selectedItems
            .map((item) => item.name)
            .join("\n")}`
    );

    cart = cart.filter((_, index) => !selectedItems.includes(cart[index]));
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});

document.getElementById("back-to-store").addEventListener("click", () => {
    window.location.href = "tt.html"; // Chuyển về trang cửa hàng
});


clearCartBtn.addEventListener("click", () => {
    clearCart();
});

renderCart();
