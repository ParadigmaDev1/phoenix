export const retailCustomerProductInfo = () => {
  const producIitemInner = document.querySelector(".product-item-inner");
  if (producIitemInner) {
    const cartBtnWrapper = producIitemInner.querySelector(".cart-btn-wrapper");
    const cartBtn = cartBtnWrapper.querySelector(".cart-btn");
    const cartBtnText = cartBtn.querySelector("p");
    const counter = cartBtnWrapper.querySelector(".counter");
    const currentCount = counter.querySelector(".current-count");
    const decBtn = counter.querySelector(".dec");
    const incBtn = counter.querySelector(".inc");

    const orderFrom = producIitemInner.querySelector(".order-form");

    const specifications = producIitemInner.querySelector(".specifications");
    const specificationsTabContentList =
      specifications.querySelectorAll(".tab-content");

    if (cartBtnWrapper) {
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
    }

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

    if (orderFrom) {
      console.log(orderFrom);
      const decBtn = orderFrom.querySelector(".dec");
      const incBtn = orderFrom.querySelector(".inc");
      const cartBtnText = orderFrom.querySelector(".to-cart-btn p");
      const cartBtn = orderFrom.querySelector(".to-cart-btn");

      const counterInput = orderFrom.querySelector(".current-count input");
      cartBtn.addEventListener("click", () => {
        if (cartBtnWrapper.className.includes("in-cart")) {
          cartBtnWrapper.classList.remove("in-cart");
          cartBtnText.innerHTML = "в корзину";
          cartBtn.classList.remove("active");
          if (orderFrom.className.includes("pre-order")) {
            cartBtnText.innerHTML = "в предзаказ";
          } else {
            cartBtnText.innerHTML = "в корзину";
          }
        } else {
          cartBtnWrapper.classList.add("in-cart");
          cartBtn.classList.add("active");
          if (orderFrom.className.includes("pre-order")) {
            cartBtnText.innerHTML = "в предзаказе";
          } else {
            cartBtnText.innerHTML = "в корзине";
          }
        }
      });
      decBtn.addEventListener("click", () => {
        if (+counterInput.value === 1) {
          cartBtnWrapper.classList.remove("in-cart");
          cartBtn.classList.remove("active");
          if (orderFrom.className.includes("pre-order")) {
            cartBtnText.innerHTML = "в предзаказ";
          } else {
            cartBtnText.innerHTML = "в корзину";
          }
          return;
        } else {
          counterInput.value = +counterInput.value - 1;
        }
      });
      incBtn.addEventListener("click", () => {
        counterInput.value = +counterInput.value + 1;
      });
      counterInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
      });
    }
  }
};
