export const fixedOrderForm = () => {
  const header = document.querySelector(".header");
  const fixedOrderForm = document.querySelector(".fixed-order-form");
  const retailCustomerProductInfo = document.querySelector(
    ".retail-customer-product-info"
  );
  if (fixedOrderForm && retailCustomerProductInfo) {
    const cartBtn = fixedOrderForm.querySelector(".cart-btn");
    const cartBtnWrapper = fixedOrderForm.querySelector(".cart-btn-wrapper");
    const cartBtnText = cartBtn.querySelector("p");
    const counter = fixedOrderForm.querySelector(".counter");
    const currentCount = counter.querySelector(".current-count");
    const decBtn = counter.querySelector(".dec");
    const incBtn = counter.querySelector(".inc");

    cartBtnWrapper.addEventListener("click", (e) => {
      e.preventDefault();
    });
    cartBtn.addEventListener("click", () => {
      if (cartBtnWrapper.className.includes("in-cart")) {
        cartBtnWrapper.classList.remove("in-cart");
        cartBtnText.innerHTML = "в корзину";
        cartBtn.classList.remove("active");
      } else {
        cartBtnWrapper.classList.add("in-cart");
        cartBtnText.innerHTML = "в корзине";
        cartBtn.classList.add("active");
      }
    });
    decBtn.addEventListener("click", () => {
      if (+currentCount.textContent === 1) {
        cartBtnWrapper.classList.remove("in-cart");
        cartBtnText.innerHTML = "в корзину";
        cartBtn.classList.remove("active");
        return;
      } else {
        currentCount.textContent = +currentCount.textContent - 1;
      }
    });
    incBtn.addEventListener("click", () => {
      currentCount.textContent = +currentCount.textContent + 1;
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > fixedOrderForm.offsetTop + header.offsetHeight) {
        fixedOrderForm.classList.add("active");
      } else {
        fixedOrderForm.classList.remove("active");
      }
    });
  }
};
