function showQRCode() {
    const paymentMethod = document.getElementById("payment-method").value;
    const qrCodeSection = document.getElementById("qr-code-section");
    qrCodeSection.style.display = paymentMethod === "bank" ? "block" : "none";
}
function confirmPayment() {
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const address = document.getElementById("user-address").value;

    if (!name || !email || !address) {
        alert("Please fill in all the required fields.");
        return;
    }
    document.getElementById("payment-form").style.display = "none";
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
    document.getElementById("confirmed-address").innerText = address;
}
window.onload = function() {
    const productImage = localStorage.getItem('productImage');
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');
    if (productImage && productName && productPrice) {
        document.getElementById('checkout-image').src = productImage;
        document.getElementById('checkout-name').textContent = productName;
        document.getElementById('checkout-price').textContent = productPrice;
    } else {
        console.error('Missing product information in localStorage');
    }
};

