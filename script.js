/* 수량 변경 */
function changeQty(btn, amount) {
    const qtyElement = btn.parentElement.querySelector(".qty");
    let current = parseInt(qtyElement.innerText);

    current += amount;
    if (current < 0) current = 0;

    qtyElement.innerText = current;
}

/* 금액 계산 */
function changeQty(btn, amount) {
    const quantityBox = btn.parentElement;
    const qtyElement = quantityBox.querySelector(".qty");

    let currentQty = parseInt(qtyElement.innerText);
    currentQty += amount;

    if (currentQty < 0) {
        currentQty = 0;
    }

    qtyElement.innerText = currentQty;

    updateTotalPrice();
}

function updateTotalPrice() {
    const menuItems = document.querySelectorAll(".menu-item");
    let total = 0;

    menuItems.forEach(function(item) {
        const price = parseInt(item.dataset.price);
        const qty = parseInt(item.querySelector(".qty").innerText);

        total += price * qty;
    });

    document.getElementById("total-price").innerText = total.toLocaleString();
}