const searchField = document.querySelector(".filter-search input");
const places = document.querySelectorAll(".custom-checkbox-wrapper p");
const filterBlocks = document.querySelectorAll(".catalog__sidebar__filters .accordion-item");

searchField.addEventListener("input", () => {
	const include = [...places].filter(el => searchField.value.toLowerCase() === el.innerText.toLowerCase() ? el : false);
	console.log(include);
});