const homeBrands = document.querySelector(".brands-list");

if (homeBrands && window.innerWidth > 767) {
  const brandItems = homeBrands.querySelectorAll(".brand");
  brandItems.forEach((brand) => {
    brand.style.width = `${100 / brandItems.length}%`;
    brand.addEventListener("click", () => {
      const isActive = brand.classList.contains("active");

      brandItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("collapsed"); // Сначала удаляем оба класса у всех
      });

      if (!isActive) {
        brand.classList.add("active");
        // Добавляем collapsed ко всем другим элементам
        brandItems.forEach((item) => {
          if (item !== brand) {
            item.classList.add("collapsed");
          }
        });
      }
    });
  });
}
