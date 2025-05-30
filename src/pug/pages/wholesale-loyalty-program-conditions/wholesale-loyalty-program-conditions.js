const article = document.querySelector(".wholesale-loyalty-program-conditions");
if (article) {
  const links = article.querySelectorAll(".link");
  const h3Elements = article.querySelectorAll("h3");
  const header = document.querySelector(".header");

  if (links.length || h3Elements.length || header) {
    let isScrolling = false;
    let isUpdating = false;
    let headerHeight = header.offsetHeight;
    let positions = [];
    let activeIndex = -1;

    const updatePositions = () => {
      headerHeight = header.offsetHeight;
      positions = Array.from(h3Elements).map(
        (el) =>
          el.getBoundingClientRect().top + window.scrollY - headerHeight - 50
      );
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + 80;

      let low = 0,
        high = positions.length;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (positions[mid] <= scrollPosition) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      activeIndex = low - 1;

      links.forEach((link) => link.classList.remove("active"));
      if (activeIndex >= 0 && links[activeIndex]) {
        links[activeIndex].classList.add("active");
      }
    };

    const scrollHandler = () => {
      if (!isUpdating) {
        isUpdating = true;
        requestAnimationFrame(() => {
          handleScroll();
          isUpdating = false;
        });
      }
    };

    const clickHandler = (index) => (e) => {
      e.preventDefault();
      if (h3Elements[index]) {
        isScrolling = true;
        const targetPosition = positions[index];

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        setTimeout(() => (isScrolling = false), 1000);
      }
    };

    let resizeTimer;
    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updatePositions();
        handleScroll();
      }, 100);
    };

    updatePositions();
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    links.forEach((link, index) => {
      link.addEventListener("click", clickHandler(index));
    });
  }
}
