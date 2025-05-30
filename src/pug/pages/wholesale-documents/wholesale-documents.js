const wholesaleDocuments = document.querySelector(".wholesale-documents");
if (wholesaleDocuments) {
  const removeBtn = document.querySelector(".remove-all-btn p");
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
