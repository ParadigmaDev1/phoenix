export const valuesBlock = () => {
  const valuesBlock = document.querySelector(".values-block");
  const element = document.documentElement;
  const styles = getComputedStyle(element);
  const screenSize = styles.getPropertyValue("--screensize").trim();

  if (valuesBlock) {
    const values = valuesBlock.querySelectorAll(".value-item");
    const valuesAnimBlock = Array.from(values).slice(0, 3);
    valuesAnimBlock.forEach((value) => {
      const content = value.querySelector(".content");
      const text = content.querySelector(".text");
      const title = text.querySelector(".title");
      const descr = text.querySelector(".descr");
      text.style.transform = `translateY(calc(${
        content.offsetHeight - title.offsetHeight - 60
      } / ${screenSize} * 100vw))`;
    });
    values.forEach((value) => {
      value.addEventListener("click", () => {
        if (value.classList.contains("active")) {
          value.classList.remove("active");
        } else {
          value.classList.add("active");
        }
      });

      value.addEventListener("mouseleave", () => {
        if (value.classList.contains("active")) {
          value.classList.remove("active");
        }
      });
    });
  }
};
