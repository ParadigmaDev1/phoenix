export const productCards = () => {
  const productCards = document.querySelectorAll(".product-card");

  if (productCards) {
    productCards.forEach((card, index) => {
      const btns = card.querySelectorAll(".btn");
      const cartBtn = card.querySelector(".cart-btn");
      const cartBtnWrapper = card.querySelector(".cart-btn-wrapper");
      const cartBtnText = cartBtn.querySelector("p");
      const counter = card.querySelector(".counter");
      const currentCount = counter.querySelector(".current-count");
      const decBtn = counter.querySelector(".dec");
      const incBtn = counter.querySelector(".inc");
      btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
        });
      });
      card.querySelectorAll(".product-card-opt-selector").forEach(el => {
        el.addEventListener("click", function(e) {
          e.preventDefault();
        })
      })
      cartBtnWrapper.addEventListener("click", (e) => {
        e.preventDefault();
      });
      cartBtn.addEventListener("click", () => {
        if (card.className.includes("in-cart")) {
          card.classList.remove("in-cart");
          cartBtnText.innerHTML = "в корзину";
          cartBtn.classList.remove("active");
        } else {
          card.classList.add("in-cart");
          cartBtnText.innerHTML = "в корзине";
          cartBtn.classList.add("active");
        }
      });
      decBtn.addEventListener("click", () => {
        if (+currentCount.textContent === 1) {
          card.classList.remove("in-cart");
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
    });
  }
};
