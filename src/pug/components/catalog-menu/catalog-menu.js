const catalogMenu = document.querySelector(".catalog-menu");
const originalOverflow = document.body.style.overflow;
const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

if (catalogMenu) {
  const header = document.querySelector(".header");
  const catalogBtn = header.querySelector(".catalog-btn");

  catalogBtn.addEventListener("click", () => {
    if (catalogBtn.classList.contains("open")) {
      header.classList.remove("catalog-open");
      if (window.scrollY === 0) {
        header.classList.remove("active");
      }
      catalogBtn.classList.remove("open");
      catalogMenu.classList.remove("active");
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "0px";
      header.style.paddingRight = `0px`;
    } else {
      header.classList.add("active", "catalog-open");
      catalogBtn.classList.add("open");
      catalogMenu.classList.add("active");
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "hidden";
      header.style.paddingRight = `${scrollBarWidth}px`;
    }
  });

  const menuItems = catalogMenu.querySelectorAll(".menu");
  const catalogMenuList = Array.from(
    catalogMenu.querySelectorAll(".catalog-menu-list")
  );

  menuItems.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      const activeMenu = catalogMenu.querySelector(".menu.active");
      if (activeMenu) {
        activeMenu.classList.remove("active");
      }
      menu.classList.add("active");
      if (catalogMenuList[index]) {
        catalogMenuList.forEach((item) => {
          item.classList.add("hidden");
        });
        setTimeout(() => {
          catalogMenuList[index].classList.remove("hidden");
        }, 0);
      } else {
        catalogMenuList.forEach((item) => {
          item.classList.add("hidden");
        });
      }
    });
  });
}
