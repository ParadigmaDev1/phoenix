export const comparison = () => {
  const header = document.querySelector(".header");
  const comparisonFixed = document.querySelectorAll(".comparison-fixed");
  const comparisonProductsSwiper = document.querySelector(
    ".comparison-products-swiper"
  );
  if (comparisonFixed.length && comparisonProductsSwiper) {
    comparisonFixed.forEach((swiper) => {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >
          comparisonProductsSwiper.offsetTop + header.offsetHeight
        ) {
          swiper.classList.add("active");
        } else {
          swiper.classList.remove("active");
        }
      });
    });
  }
};
