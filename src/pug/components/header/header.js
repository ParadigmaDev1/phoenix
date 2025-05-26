export const header = () => {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;
  let isTicking = false;

  const updateHeader = () => {
    // Все DOM-операции внутри requestAnimationFrame
    if (lastScrollY > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
    isTicking = false; // Сбрасываем флаг для следующего тика
  };

  window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY; // Сохраняем значение

    // Троттлинг через requestAnimationFrame
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateHeader);
    }
  });
};
