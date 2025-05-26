export const fixedOrderForm = () => {
  const header = document.querySelector(".header");
  const fixedOrderForm = document.querySelector(".fixed-order-form");
  const retailCustomerProductInfo = document.querySelector(
    ".retail-customer-product-info"
  );

  if (!fixedOrderForm || !retailCustomerProductInfo || !header) return;

  const elements = {
    cartBtn: fixedOrderForm.querySelector(".cart-btn"),
    cartBtnWrapper: fixedOrderForm.querySelector(".cart-btn-wrapper"),
    cartBtnText: fixedOrderForm.querySelector(".cart-btn p"),
    counter: fixedOrderForm.querySelector(".counter"),
    currentCount: fixedOrderForm.querySelector(".counter .current-count"),
    decBtn: fixedOrderForm.querySelector(".dec"),
    incBtn: fixedOrderForm.querySelector(".inc"),
  };

  if (!Object.values(elements).every((el) => el !== null)) {
    console.error("One or more elements not found");
    return;
  }

  const updateCartState = (isInCart) => {
    elements.cartBtnWrapper.classList.toggle("in-cart", isInCart);
    elements.cartBtnText.textContent = isInCart ? "в корзине" : "в корзину";
    elements.cartBtn.classList.toggle("active", isInCart);
  };

  let isTicking = false;
  let activationPoint = 0;

  const updateActivationPoint = () => {
    activationPoint = fixedOrderForm.offsetTop + header.offsetHeight;
  };

  const handleScroll = () => {
    const shouldActivate = window.scrollY > activationPoint;
    fixedOrderForm.classList.toggle("active", shouldActivate);
  };

  const scrollHandler = () => {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(() => {
        handleScroll();
        isTicking = false;
      });
    }
  };

  const handleCartClick = () => {
    const isInCart = elements.cartBtnWrapper.classList.contains("in-cart");
    updateCartState(!isInCart);
  };

  const handleDecClick = () => {
    const current = parseInt(elements.currentCount.textContent);
    if (current === 1) {
      updateCartState(false);
    } else {
      elements.currentCount.textContent = current - 1;
    }
  };

  const handleIncClick = () => {
    elements.currentCount.textContent =
      parseInt(elements.currentCount.textContent) + 1;
  };

  let resizeTimeout;
  const resizeHandler = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateActivationPoint();
    }, 100);
  };

  updateActivationPoint();
  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("resize", resizeHandler);

  elements.cartBtnWrapper.addEventListener("click", (e) => e.preventDefault());
  elements.cartBtn.addEventListener("click", handleCartClick);
  elements.decBtn.addEventListener("click", handleDecClick);
  elements.incBtn.addEventListener("click", handleIncClick);

  return () => {
    window.removeEventListener("scroll", scrollHandler);
    window.removeEventListener("resize", resizeHandler);
    clearTimeout(resizeTimeout);
    elements.cartBtnWrapper.removeEventListener("click", handleCartClick);
    elements.decBtn.removeEventListener("click", handleDecClick);
    elements.incBtn.removeEventListener("click", handleIncClick);
  };
};
