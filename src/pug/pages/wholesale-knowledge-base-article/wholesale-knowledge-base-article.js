const wholesaleKnowledgeBaseArticle = document.querySelector(
  ".wholesale-knowledge-base-article"
);
if (wholesaleKnowledgeBaseArticle) {
  const links = wholesaleKnowledgeBaseArticle.querySelectorAll(".link");
  const h3 = wholesaleKnowledgeBaseArticle.querySelectorAll("h3");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight;
    const threshold = headerHeight + 80;
    let activeIndex = -1;

    h3.forEach((tag, index) => {
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
      const currentH3 = h3[index];
      if (currentH3) {
        const targetPosition = currentH3.offsetTop - header.offsetHeight - 50;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
