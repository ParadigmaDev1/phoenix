const wholesaleLoyaltyProgramConditions = document.querySelector(
  ".wholesale-loyalty-program-conditions"
);
if (wholesaleLoyaltyProgramConditions) {
  const links = wholesaleLoyaltyProgramConditions.querySelectorAll(".link");
  const h4 = wholesaleLoyaltyProgramConditions.querySelectorAll("h4");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight;
    const threshold = headerHeight + 80;
    let activeIndex = -1;

    h4.forEach((tag, index) => {
      const tagTop = tag.getBoundingClientRect().top;
      if (tagTop <= threshold) {
        activeIndex = index;
      }
    });

    links.forEach((link) => link.classList.remove("active"));
    if (activeIndex !== -1) {
      links[activeIndex].classList.add("active");
    }
  });

  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const currentH4 = h4[index];
      if (currentH4) {
        const targetPosition = currentH4.offsetTop - header.offsetHeight - 50;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
