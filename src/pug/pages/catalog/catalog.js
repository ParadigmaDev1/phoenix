try {
  const searchField = document.querySelector(".filter-search input");
  const places = document.querySelectorAll(".custom-checkbox-wrapper p");
  const filterBlocks = document.querySelectorAll(
    ".catalog__sidebar__filters .accordion-item"
  );

  searchField.addEventListener("input", () => {
    const include = [...places].filter((el) =>
      searchField.value.toLowerCase() === el.innerText.toLowerCase()
        ? el
        : false
    );
  });

  const viewBtns = document.querySelectorAll(
    ".catalog__content__head__view button"
  );
  const catalogBody = document.querySelector(".catalog__content__body");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      viewBtns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
      if (btn.dataset.view === "horizontal") {
        catalogBody.classList.add("horizontal");
      } else {
        catalogBody.classList.remove("horizontal");
      }
    });
  });
} catch (e) {
  console.log(e);
}
