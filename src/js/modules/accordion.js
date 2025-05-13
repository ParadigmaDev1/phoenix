export const accordionFunc = () => {
  const updateMaxHeight = (item) => {
    if (item) {
      const titleHeight = item.querySelector(".accordion-title").scrollHeight;
      let bodyHeight = 0;

      const body = item.querySelector(".accordion-body");
      if (body) {
        bodyHeight = body.scrollHeight;

        // Учитываем только активные дочерние аккордеоны
        const nestedItems = body.querySelectorAll(".accordion-item");
        nestedItems.forEach((nestedItem) => {
          // if (nestedItem.classList.contains("active")) {
          bodyHeight += nestedItem.scrollHeight + titleHeight;
          // } else {
          //   bodyHeight +=
          //     nestedItem.querySelector(".accordion-title").scrollHeight +
          //     titleHeight;
          // }
        });
      }

      item.style.maxHeight = item.classList.contains("active")
        ? `${titleHeight + bodyHeight}px`
        : `${titleHeight}px`;
    }
  };

  const closeAllChildren = (parentItem) => {
    const children = parentItem.querySelectorAll(".accordion-item");
    children.forEach((child) => {
      child.classList.remove("active");
      updateMaxHeight(child);
      // Рекурсивно закрываем все вложенные уровни
      closeAllChildren(child);
    });
  };

  const handleClick = (event) => {
    const title = event.target.closest(".accordion-title");
    if (!title) return;

    const item = title.closest(".accordion-item");
    if (!item) return;

    event.stopPropagation();

    const wasActive = item.classList.contains("active");

    // Закрываем другие элементы того же уровня только для корневых аккордеонов
    if (!item.closest(".accordion-item")) {
      const siblings = item.parentNode.querySelectorAll(".accordion-item");
      siblings.forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.remove("active");
          updateMaxHeight(sibling);
          closeAllChildren(sibling);
        }
      });
    }

    // Дополнительная логика для auto-close элементов
    if (item.classList.contains("auto-close")) {
      // Находим все auto-close элементы на том же уровне
      const allAutoCloseItems = document.querySelectorAll(
        ".accordion-item.auto-close"
      );
      allAutoCloseItems.forEach((autoCloseItem) => {
        if (autoCloseItem !== item) {
          autoCloseItem.classList.remove("active");
          updateMaxHeight(autoCloseItem);
          closeAllChildren(autoCloseItem);
        }
      });
    }

    item.classList.toggle("active");

    // Если родительский аккордеон закрывается, закрываем все дочерние
    if (wasActive && !item.classList.contains("active")) {
      closeAllChildren(item);
    }

    updateMaxHeight(item);

    // Обновляем текст кнопки
    const titleShow = item.querySelector(".accordion-title-show p");
    if (titleShow) {
      titleShow.textContent = item.classList.contains("active")
        ? "Свернуть"
        : "Развернуть";
    }
  };

  // Инициализация
  document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.querySelectorAll(".accordion-item").forEach((item) => {
      updateMaxHeight(item);
      item
        .querySelector(".accordion-title")
        .addEventListener("click", handleClick);
    });
  });

  // Ресайз с debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      document.querySelectorAll(".accordion-item").forEach(updateMaxHeight);
    }, 100);
  });

  const filterButton = document.getElementById("filterBtn");
  if (filterButton) {
    let resizeTimeout;
    filterButton.addEventListener("click", function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        document.querySelectorAll(".accordion-item").forEach(function (el) {
          el.style.maxHeight = el.querySelector(".accordion-title").scrollHeight + 'px';
        });
        console.log('updated')
      }, 100);
    })
  }
};
