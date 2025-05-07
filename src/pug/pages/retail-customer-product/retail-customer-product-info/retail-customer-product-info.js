export const retailCustomerProductInfo = () => {
  const producIitemInner = document.querySelector(".product-item-inner");
  if (producIitemInner) {
    const cartBtn = producIitemInner.querySelector(".cart-btn");
    const cartBtnWrapper = producIitemInner.querySelector(".cart-btn-wrapper");
    const cartBtnText = cartBtn.querySelector("p");
    const counter = producIitemInner.querySelector(".counter");
    const currentCount = counter.querySelector(".current-count");
    const decBtn = counter.querySelector(".dec");
    const incBtn = counter.querySelector(".inc");

    const orderFrom = counter.querySelector(".order-form");

    const specifications = producIitemInner.querySelector(".specifications");
    const specificationsTabContentList =
      specifications.querySelectorAll(".tab-content");

    cartBtnWrapper.addEventListener("click", (e) => {
      e.preventDefault();
    });
    cartBtn.addEventListener("click", () => {
      if (cartBtnWrapper.className.includes("in-cart")) {
        cartBtnWrapper.classList.remove("in-cart");
        cartBtnText.innerHTML = "в корзину";
        cartBtn.classList.remove("active");
        if (cartBtnWrapper.className.includes("pre-order")) {
          cartBtnText.innerHTML = "в предзаказ";
        } else {
          cartBtnText.innerHTML = "в корзину";
        }
      } else {
        cartBtnWrapper.classList.add("in-cart");
        cartBtn.classList.add("active");
        if (cartBtnWrapper.className.includes("pre-order")) {
          cartBtnText.innerHTML = "в предзаказе";
        } else {
          cartBtnText.innerHTML = "в корзине";
        }
      }
    });
    decBtn.addEventListener("click", () => {
      if (+currentCount.textContent === 1) {
        cartBtnWrapper.classList.remove("in-cart");
        cartBtn.classList.remove("active");
        if (cartBtnWrapper.className.includes("pre-order")) {
          cartBtnText.innerHTML = "в предзаказ";
        } else {
          cartBtnText.innerHTML = "в корзину";
        }
        return;
      } else {
        currentCount.textContent = +currentCount.textContent - 1;
      }
    });
    incBtn.addEventListener("click", () => {
      currentCount.textContent = +currentCount.textContent + 1;
    });

    specificationsTabContentList.forEach((tabContent) => {
      const hiddenContent = tabContent.querySelector(".hidden-content");
      const showBtn = tabContent.querySelector(".show-btn");
      showBtn.addEventListener("click", () => {
        if (showBtn.className.includes("active")) {
          hiddenContent.classList.remove("active");
          showBtn.querySelector("p").textContent = "развернуть все";

          showBtn.classList.remove("active");
        } else {
          hiddenContent.classList.add("active");
          showBtn.querySelector("p").textContent = "Свернуть";

          showBtn.classList.add("active");
        }
      });
    });
  }
};
