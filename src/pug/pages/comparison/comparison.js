export const comparison = () => {
  const header = document.querySelector(".header");
  const comparisonFixed = document.querySelectorAll(".comparison-fixed");
  const comparisonProductsSwiper = document.querySelector(
    ".comparison-products-swiper"
  );

  if (!comparisonFixed.length || !comparisonProductsSwiper || !header) return;

  let isTicking = false;
  let lastScrollY = window.scrollY;
  let activationPoint = 0;

  // Кешируем значения, которые могут меняться при ресайзе
  const updateActivationPoint = () => {
    activationPoint = comparisonProductsSwiper.offsetTop + header.offsetHeight;
  };

  // Инициализируем начальное значение
  updateActivationPoint();

  const updateComparison = () => {
    isTicking = false;

    comparisonFixed.forEach((swiper) => {
      if (lastScrollY > activationPoint) {
        swiper.classList.add("active");
      } else {
        swiper.classList.remove("active");
      }
    });
  };

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateComparison);
    }
  };

  // Оптимизация для изменений размеров окна
  let resizeTimeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateActivationPoint();
      updateComparison();
    }, 100);
  };

  // Вешаем обработчики
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Очистка
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
    clearTimeout(resizeTimeout);
  };
};
