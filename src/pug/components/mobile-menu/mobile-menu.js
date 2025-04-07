const header = document.querySelector(".header");
const burger = document.querySelector(".burger-btn ");
const menu = document.querySelector(".mobile-menu");
const closeBtn = menu.querySelector(".close-btn");
const originalOverflow = document.body.style.overflow;
const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

const closeMenu = () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
  setTimeout(() => {
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = "0px";
    header.style.paddingRight = `0px`;
  }, 300);
};

burger.addEventListener("click", () => {
  menu.classList.add("active");
  burger.classList.add("active");
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.style.overflow = "hidden";
  header.style.paddingRight = `${scrollBarWidth}px`;
});
closeBtn.addEventListener("click", () => {
  closeMenu();
});
window.addEventListener("click", (e) => {
  if (e.target === menu) {
    closeMenu();
  }
});
