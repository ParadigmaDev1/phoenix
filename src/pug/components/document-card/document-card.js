const documentCards = document.querySelectorAll(".document-card");

if (documentCards.length) {
  const totalDocumentsSelect = document.querySelector(
    ".total-documents-select"
  );
  const selectAll = document.querySelector(".select-all input");
  const removeAllBtn = document.querySelector(".remove-all-btn");

  documentCards.forEach((card) => {
    const input = card.querySelector('input[type="checkbox"]');
    const commentWrapper = card.querySelector(".comment-wrapper");
    const addCommentBtn = card.querySelector(".add-comment-btn");
    const textareaWrapper = card.querySelector(".textarea-wrapper");
    const saveCommentBtn = card.querySelector(".save-comment-btn");
    const cancelCommentBtn = card.querySelector(".cancel-comment-btn");

    input.addEventListener("change", () => {
      const checkedCards = document.querySelectorAll(
        '.document-card input[type="checkbox"]:checked'
      );
      if (checkedCards.length > 0) {
        totalDocumentsSelect.textContent = `Выбрано: ${checkedCards.length}`;
        totalDocumentsSelect.classList.remove("hidden");
        removeAllBtn.classList.remove("hidden");
      } else {
        totalDocumentsSelect.classList.add("hidden");
        removeAllBtn.classList.add("hidden");
      }
    });
    selectAll.addEventListener("change", () => {
      if (selectAll.checked) {
        const checkedCards = document.querySelectorAll(
          '.document-card input[type="checkbox"]:checked'
        );
        documentCards.forEach((card) => {
          const input = card.querySelector("input");
          input.checked = true;
        });
        totalDocumentsSelect.textContent = `Выбрано: ${checkedCards.length}`;
        totalDocumentsSelect.classList.remove("hidden");
        removeAllBtn.classList.remove("hidden");
      } else {
        documentCards.forEach((card) => {
          const input = card.querySelector("input");
          input.checked = false;
        });
        totalDocumentsSelect.classList.add("hidden");
        removeAllBtn.classList.add("hidden");
      }
    });
    removeAllBtn.addEventListener("click", () => {
      const checkedCards = document.querySelectorAll(
        '.document-card input[type="checkbox"]:checked'
      );
      checkedCards.forEach((input) => {
        input.checked = false;
      });
      selectAll.checked = false;
      totalDocumentsSelect.classList.add("hidden");
      removeAllBtn.classList.add("hidden");
    });

    if (addCommentBtn && textareaWrapper) {
      const textarea = textareaWrapper.querySelector("textarea");

      addCommentBtn.addEventListener("click", () => {
        textareaWrapper.classList.remove("hidden");
        addCommentBtn.classList.add("hidden");
      });
      if (cancelCommentBtn) {
        cancelCommentBtn.addEventListener("click", () => {
          textareaWrapper.classList.add("hidden");
          addCommentBtn.classList.remove("hidden");
          textarea.value = "";
        });
      }
      if (saveCommentBtn) {
        saveCommentBtn.addEventListener("click", () => {
          const newComment = document.createElement("з");

          newComment.textContent = textarea.value;
          newComment.classList.add("comment");
          textareaWrapper.remove();
          commentWrapper.appendChild(newComment);
        });
      }
    }
  });
}
