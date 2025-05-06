export const retailCustomerMakingOrder = () => {
  const retailCustomerMakingOrder = document.querySelector(
    ".retail-customer-making-order"
  );
  const radioWrapper =
    retailCustomerMakingOrder.querySelector(".radio-wrapper");
  const inputs = radioWrapper.querySelectorAll("input");

  const courierDelivery =
    retailCustomerMakingOrder.querySelector(".courier-delivery");
  const pickupDelivery =
    retailCustomerMakingOrder.querySelector(".pickup-delivery");

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (e.target.value === "courier") {
        courierDelivery.classList.remove("hidden");
        pickupDelivery.classList.add("hidden");
      } else {
        courierDelivery.classList.add("hidden");
        pickupDelivery.classList.remove("hidden");
      }
    });
  });
};
