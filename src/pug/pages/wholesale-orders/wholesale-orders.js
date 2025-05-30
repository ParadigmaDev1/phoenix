const wholesaleOrders = document.querySelector(".wholesale-orders");
if (wholesaleOrders) {
  const orderItems = wholesaleOrders.querySelectorAll(".accordion-item");

  orderItems.forEach((item) => {
    const features = item.querySelector(".features");
    features.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}
