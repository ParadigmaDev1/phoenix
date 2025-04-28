export const homeIdeas = () => {
  const homeIdeas = document.querySelector(".home-ideas");

  if (homeIdeas) {
    const pinWrappers = homeIdeas.querySelectorAll(".pin-wrapper");
    let activeWrapper = null; // Хранит текущий активный элемент

    pinWrappers.forEach((wrapper) => {
      const pin = wrapper.querySelector(".pin");
      const card = wrapper.querySelector(".product-card");

      pin.addEventListener("click", () => {
        // Если кликнули на уже активный элемент — деактивируем его
        if (wrapper === activeWrapper) {
          pin.classList.remove("active");
          card.classList.remove("active");
          activeWrapper = null;
        } else {
          // Если есть активный элемент — деактивируем его
          if (activeWrapper) {
            const activePin = activeWrapper.querySelector(".pin");
            const activeCard = activeWrapper.querySelector(".product-card");
            activePin.classList.remove("active");
            activeCard.classList.remove("active");
          }

          // Активируем новый элемент
          pin.classList.add("active");
          card.classList.add("active");
          activeWrapper = wrapper;
        }
      });
    });
  }
};
