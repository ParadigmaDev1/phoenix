const catalogMenu = document.querySelector(".catalog-menu");
const originalOverflow = document.body.style.overflow;
const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

if (catalogMenu) {
  const header = document.querySelector(".header");
  const catalogBtn = header.querySelector(".catalog-btn");
  const menuItems = catalogMenu.querySelectorAll(".menu");
  const closeBtn = catalogMenu.querySelector(".close-catalog-btn");
  const catalogMenuList = Array.from(
    catalogMenu.querySelectorAll(".catalog-menu-list")
  );
  const catalogMenuLinks = Array.from(
    catalogMenu.querySelectorAll(".catalog-menu-links")
  );
  const catalogMenuLinksWrapper = Array.from(
    catalogMenu.querySelectorAll(".catalog-menu-links-wrapper")
  );
  const subMenuItems = catalogMenu.querySelectorAll(".sub-menu");

  function resetMenu() {
    header.classList.remove("catalog-open");
    if (window.scrollY === 0) {
      header.classList.remove("active");
    }
    catalogBtn.classList.remove("open");
    catalogMenu.classList.remove("active");
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
    menuItems.forEach((item) => item.classList.remove("active"));
    catalogMenuList.forEach((item) => item.classList.add("hidden"));
    catalogMenuLinks.forEach((item) => item.classList.add("hidden"));
    catalogMenuLinksWrapper.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("ready");
    });
  }

  function openMenu() {
    header.classList.add("active", "catalog-open");
    catalogBtn.classList.add("open");
    catalogMenu.classList.add("active");
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
    header.style.paddingRight = `${scrollBarWidth}px`;
    resetMenu();
  }

  catalogBtn.addEventListener("click", () => {
    if (catalogBtn.classList.contains("open")) {
      resetMenu();
    } else {
      openMenu();
    }
  });

  menuItems.forEach((menu, index) => {
    menu.addEventListener("mouseenter", () => {
      const activeMenu = catalogMenu.querySelector(".menu.active");
      activeMenu?.classList.remove("active");
      menu.classList.add("active");

      catalogMenuList.forEach((item) => item.classList.add("hidden"));
      catalogMenuLinksWrapper.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("ready");
      });

      setTimeout(() => {
        catalogMenuList[index]?.classList.remove("hidden");
        catalogMenuLinksWrapper[index]?.classList.add("ready");
      }, 0);
    });
  });

  subMenuItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      const currentLinksWrapper = catalogMenu.querySelector(
        ".catalog-menu-links-wrapper.ready"
      );
      const activeItem = catalogMenu.querySelector(".sub-menu.active");

      activeItem?.classList.remove("active");
      item.classList.add("active");
      currentLinksWrapper?.classList.remove("hidden");

      catalogMenuLinks.forEach((item) => item.classList.add("hidden"));
      setTimeout(() => {
        catalogMenuLinks[index]?.classList.remove("hidden");
      }, 0);
    });
  });

  closeBtn.addEventListener("click", resetMenu);
}
