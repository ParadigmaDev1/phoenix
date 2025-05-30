const header = document.querySelector(".header");
console.log("asdsaad");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
