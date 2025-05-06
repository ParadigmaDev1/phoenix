export const profileMenu = () => {
  const profileMenu = document.querySelector(".profile-menu");
  const originalOverflow = document.body.style.overflow;
  const header = document.querySelector(".header");
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  if (profileMenu) {
    const openBtn = document.querySelector(".open-profile-menu-btn");
    const closeBtn = profileMenu.querySelector(".close-btn");

    closeBtn.addEventListener("click", () => {
      profileMenu.classList.remove("active");
      setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "0px";
        if (header) header.style.paddingRight = "0px";
      }, 300);
    });
    openBtn.addEventListener("click", () => {
      profileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    });
  }
};
