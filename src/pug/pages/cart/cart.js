const cartPage = document.querySelector(".cart-page");
if (cartPage) {
  const btn = document.querySelector(".cart__actions .more-actions");
  const plate = document.querySelector(".cart__actions .more-actions-hidden");
  const fixedPlate = document.querySelector(".cart-opt__fixed");
  const selectAll = document.querySelector(".select-all input");
  const removeAllBtn = document.querySelector(".cart__choose .remove-all");
  const total = document.querySelector(".cart__choose .choose-num");
  const totalNumber = total.querySelector("span");
  const checkboxes = document.querySelectorAll(
    ".cart__items .product-card-swiper-wrapper .custom-checkbox"
  );
  const checkboxes2 = document.querySelectorAll(
    ".cart__items .product-card-cart__handlers .custom-checkbox"
  );
  const productCards = document.querySelectorAll(".product-card-cart ");
  const removeBtn = document.querySelector(".cart__choose .remove-all span");

  if (btn && plate) {
    btn.addEventListener("click", function () {
      plate.classList.toggle("active");
    });

    document.body.addEventListener("click", function (e) {
      const target = e.target;
      if (
        !target.classList.contains("more-actions-hidden") &&
        !target.closest(".more-actions-hidden") &&
        target !== btn &&
        target.closest("button") !== btn
      ) {
        plate.classList.remove("active");
      }
    });
  }

  selectAll.addEventListener("change", () => {
    if (selectAll.checked) {
      if (window.innerWidth > 767) {
        checkboxes.forEach((input) => {
          input.checked = true;
        });
      } else {
        checkboxes2.forEach((input) => {
          input.checked = true;
        });
      }

      totalNumber.textContent = `${productCards.length}`;
      total.classList.remove("hidden");
      removeAllBtn.classList.remove("hidden");
      if (fixedPlate) {
        fixedPlate.classList.remove("hidden");
      }
    } else {
      if (window.innerWidth > 767) {
        checkboxes.forEach((input) => {
          input.checked = false;
        });
      } else {
        checkboxes2.forEach((input) => {
          input.checked = false;
        });
      }
      total.classList.add("hidden");
      removeAllBtn.classList.add("hidden");
      if (fixedPlate) {
        fixedPlate.classList.add("hidden");
      }
    }
  });
  checkboxes.forEach((input) => {
    input.addEventListener("change", () => {
      const checkedCards = document.querySelectorAll(
        ".cart__items .product-card-swiper-wrapper .custom-checkbox:checked"
      );
      if (checkedCards.length > 0) {
        totalNumber.textContent = `${checkedCards.length}`;
        total.classList.remove("hidden");
        removeAllBtn.classList.remove("hidden");
        if (fixedPlate) {
          fixedPlate.classList.remove("hidden");
        }
      } else {
        total.classList.add("hidden");
        removeAllBtn.classList.add("hidden");
        selectAll.checked = false;

        if (fixedPlate) {
          fixedPlate.classList.add("hidden");
        }
      }
    });
  });
  checkboxes2.forEach((input) => {
    input.addEventListener("change", () => {
      const checkedCards = document.querySelectorAll(
        ".cart__items .product-card-cart__handlers .custom-checkbox:checked"
      );
      if (checkedCards.length > 0) {
        totalNumber.textContent = `${checkedCards.length}`;
        total.classList.remove("hidden");
        removeAllBtn.classList.remove("hidden");
        if (fixedPlate) {
          fixedPlate.classList.remove("hidden");
        }
      } else {
        total.classList.add("hidden");
        removeAllBtn.classList.add("hidden");
        if (fixedPlate) {
          fixedPlate.classList.add("hidden");
        }
        selectAll.checked = false;
      }
    });
  });
  if (window.innerWidth > 767) {
    removeBtn.textContent = "Удалить выбранные";
  } else {
    removeBtn.textContent = "Удалить";
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      removeBtn.textContent = "Удалить выбранные";
    } else {
      removeBtn.textContent = "Удалить";
    }
  });
}
