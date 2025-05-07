export const wholesaleMakingOrder = () => {
  const wholesaleMakingOrder = document.querySelector(
    ".wholesale-making-order"
  );
  if (wholesaleMakingOrder) {
    const radioWrapper = wholesaleMakingOrder.querySelector(".radio-wrapper");
    const inputs = radioWrapper.querySelectorAll("input");

    const delivery = wholesaleMakingOrder.querySelector(".delivery");
    const pickupDelivery = wholesaleMakingOrder.querySelector(".pickup");

    inputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        if (e.target.value === "delivery") {
          delivery.classList.remove("hidden");
          pickupDelivery.classList.add("hidden");
        } else {
          delivery.classList.add("hidden");
          pickupDelivery.classList.remove("hidden");
        }
      });
    });
  }
};
