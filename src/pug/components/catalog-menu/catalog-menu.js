const catalogMenu = document.querySelector(".catalog-menu");
const originalOverflow = document.body.style.overflow;
const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
if (catalogMenu) {
  const header = document.querySelector(".header");
  const catalogBtn = header.querySelector(".catalog-btn");
  const catalogTopMenu = catalogMenu.querySelector(".catalog-top-menu");
  const catalogTopMenuTitle = catalogMenu.querySelector(".title");
  const menuItems = catalogMenu.querySelectorAll(".menu");
  const closeBtns = catalogMenu.querySelectorAll(".close-catalog-btn");
  const backBtn = catalogMenu.querySelector(".back-btn");
  const cols = catalogMenu.querySelectorAll(".col");
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
  let navigationHistory = [];

  function updateTitle() {
    catalogTopMenuTitle.innerHTML =
      navigationHistory.length > 0
        ? navigationHistory[navigationHistory.length - 1]
        : "Каталог";
  }

  function handleBackButton() {
    if (navigationHistory.length === 0) return;

    navigationHistory.pop();

    updateTitle();

    const currentLevel = navigationHistory.length;
    cols.forEach((col, index) => {
      if (index === currentLevel) {
        col.classList.remove("hidden");
      } else if (index > currentLevel) {
        col.classList.add("hidden");
      }
    });

    if (currentLevel === 0) {
      cols[0].classList.remove("hidden");
      catalogTopMenu.classList.remove("active");
    }
  }

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
    cols.forEach((col) => {
      col.classList.remove("hidden");
    });
    catalogTopMenu.classList.remove("active");
    catalogTopMenuTitle.innerHTML = "Каталог";
    navigationHistory = [];
  }

  function openMenu() {
    header.classList.add("active", "catalog-open");
    catalogBtn.classList.add("open");
    catalogMenu.classList.add("active");
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
    header.style.paddingRight = `${scrollBarWidth}px`;
    // resetMenu();
  }

  catalogBtn.addEventListener("click", () => {
    if (catalogBtn.classList.contains("open")) {
      resetMenu();
    } else {
      openMenu();
    }
  });

  const menuItemsFn = () => {
    menuItems.forEach((menu, index) => {
      if (window.innerWidth > 992) {
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
      } else {
        menu.addEventListener("click", () => {
          const activeMenu = catalogMenu.querySelector(".menu.active");
          activeMenu?.classList.remove("active");
          const col = menu.parentElement.parentElement;
          menu.classList.add("active");
          col.classList.add("hidden");
          catalogTopMenu.classList.add("active");
          navigationHistory.push(menu.querySelector(".text span").textContent);
          updateTitle();
          catalogMenuList.forEach((item) => item.classList.add("hidden"));
          catalogMenuLinksWrapper.forEach((item) => {
            item.classList.add("hidden");
            item.classList.remove("ready");
          });
          const currentCol = menu.closest(".col");
          const nextCol = catalogMenuList[index].closest(".col");

          currentCol.classList.add("hidden");
          nextCol.classList.remove("hidden");
          setTimeout(() => {
            catalogMenuList[index]?.classList.remove("hidden");
            catalogMenuLinksWrapper[index]?.classList.add("ready");
          }, 0);
        });
      }
    });
  };

  const submenuItems = () => {
    subMenuItems.forEach((item, index) => {
      if (window.innerWidth > 992) {
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
      } else {
        item.addEventListener("click", () => {
          navigationHistory.push(
            item.querySelector(".title-wrapper span").textContent
          );
          updateTitle();
          const currentLinksWrapper = catalogMenu.querySelector(
            ".catalog-menu-links-wrapper.ready"
          );
          const activeItem = catalogMenu.querySelector(".sub-menu.active");
          const col = item.parentElement.parentElement;
          activeItem?.classList.remove("active");
          item.classList.add("active");
          col.classList.add("hidden");
          currentLinksWrapper?.classList.remove("hidden");
          const currentCol = item.closest(".col");
          const nextCol = catalogMenuLinks[index].closest(".col");

          currentCol.classList.add("hidden");
          nextCol.classList.remove("hidden");
          catalogMenuLinks.forEach((item) => item.classList.add("hidden"));
          setTimeout(() => {
            catalogMenuLinks[index]?.classList.remove("hidden");
          }, 0);
        });
      }
    });
  };
  submenuItems();
  menuItemsFn();
  window.addEventListener("resize", () => {
    submenuItems();
    menuItemsFn();
  });
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", resetMenu);
  });

  backBtn.addEventListener("click", handleBackButton);
}
