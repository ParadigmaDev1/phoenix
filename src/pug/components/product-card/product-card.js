const productCards = document.querySelectorAll(".product-card");

if (productCards) {
  productCards.forEach((card, index) => {
    const btns = card.querySelectorAll(".btn");
    const cartBtnWrapper = card.querySelectorAll(".cart-btn-wrapper");
    const counterList = card.querySelectorAll(".counter");

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
    cartBtnWrapper.forEach((wrapper) => {
      const cartBtn = wrapper.querySelector(".cart-btn");
      if (cartBtn) {
        const cartBtnText = cartBtn.querySelector("p");
        cartBtn.addEventListener("click", () => {
          if (card.className.includes("in-cart")) {
            card.classList.remove("in-cart");
            if (cartBtnText.classList.contains("presale-text")) {
              cartBtnText.innerHTML = "в предзаказ";
            } else {
              cartBtnText.innerHTML = "в корзину";
            }
            cartBtn.classList.remove("active");
          } else {
            card.classList.add("in-cart");
            if (cartBtnText.classList.contains("presale-text")) {
              cartBtnText.innerHTML = "в предзаказе";
            } else {
              cartBtnText.innerHTML = "в корзине";
            }
            cartBtn.classList.add("active");
          }
        });
      }

      card.querySelectorAll(".product-card-opt-selector").forEach((el) => {
        el.addEventListener("click", function (e) {
          e.preventDefault();
        });
      });
      wrapper.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
    counterList.forEach((counter) => {
      const currentCount = counter.querySelector(".current-count");
      const decBtn = counter.querySelector(".dec");
      const incBtn = counter.querySelector(".inc");
      decBtn.addEventListener("click", () => {
        if (+currentCount.textContent === 1) {
          card.classList.remove("in-cart");
          if (cartBtn) {
            const cartBtnText = cartBtn.querySelector("p");

            cartBtnText.innerHTML = "в корзину";
            cartBtn.classList.remove("active");
          }

          return;
        } else {
          currentCount.textContent = +currentCount.textContent - 1;
        }
      });
      incBtn.addEventListener("click", () => {
        console.log("dada");

        currentCount.textContent = +currentCount.textContent + 1;
      });
    });
  });
}
