const selectors = document.querySelectorAll(".selector");
const linkSelectors = document.querySelectorAll(".link-selector");
if (linkSelectors) {
  linkSelectors.forEach((selector) => {
    const selectorTitle = selector.querySelector(".link-selector-btn");
    selectorTitle.addEventListener("click", () => {
      if (selector.className.includes("active")) {
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }
    });
    selector.addEventListener("mouseleave", () => {
      selector.classList.remove("active");
    });
  });
}

window.addEventListener("touchmove", () => {
  linkSelectors.forEach((selector) => {
    selector.classList.remove("active");
  });
});

if (selectors) {
  selectors.forEach((selector) => {
    const selectorBtn = selector.querySelector(".selector-btn");
    const selectorInputs = selector.querySelectorAll("label");
    if (selectorBtn) {
      selectorBtn.addEventListener("click", (e) => {
        if (selector.className.includes("active")) {
          selector.classList.remove("active");
        } else {
          selector.classList.add("active");
        }
      });
      selector.addEventListener("mouseleave", () => {
        selector.classList.remove("active");
      });
      selectorInputs.forEach((label) => {
        label.addEventListener("change", (e) => {
          if (!selector.className.includes("custom-checkbox-selector")) {
            label.control.removeAttribute("checked");
            const textBtn = selectorBtn.querySelector(".selector-title");

            textBtn.innerHTML = label.innerHTML;
            selector.classList.remove("active");
          } else {
            const successBtn = selector.querySelector(
              ".success-checkbox-selector"
            );
            const activeCheckBoxes =
              selector.querySelectorAll(".bazis-check input");
            const filteredCheckboxes = Array.from(activeCheckBoxes).filter(
              (checkbox) => {
                return checkbox.checked === true;
              }
            );
            const mapped = Array.from(filteredCheckboxes).map((checkbox) => {
              return checkbox.parentElement.querySelector("p").textContent;
            });

            successBtn.addEventListener("click", () => {
              const textBtn = selectorBtn.querySelector(".selector-title");

              textBtn.innerHTML = mapped.length > 0 ? mapped.join(", ") : "все";
              selector.classList.remove("active");
            });
          }
        });
      });
    }
  });
  const checkedSelector = document.querySelector(".custom-checkbox-selector");
  selectors.forEach((selector) => {
    const selectorTitle = selector.querySelector(".selector-title");
    if (!selector.className.includes("link-selector")) {
      selectorTitle.style.maxWidth = `${selector.offsetWidth - 100}px`;
    }

    window.addEventListener("resize", () => {
      if (!selector.className.includes("link-selector")) {
        selectorTitle.style.maxWidth = `${selector.offsetWidth - 100}px`;
      }
    });
  });
  // if (checkedSelector) {
  //   const selectorTitle = checkedSelector.querySelector(".selector-title");
  //   selectorTitle.style.maxWidth = `${checkedSelector.offsetWidth - 100}px`;

  //   window.addEventListener("resize", () => {
  //     selectorTitle.style.maxWidth = `${checkedSelector.offsetWidth - 100}px`;
  //   });
  // }
}
