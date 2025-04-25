const quizModal = document.querySelector(".quiz-modal");
if (quizModal) {
  const steps = quizModal.querySelectorAll(".quiz-step");
  const quizCounter = quizModal.querySelector(".counter");
  const currentNumber = quizCounter.querySelector(".current");
  steps.forEach((step) => {
    const nextBtn = step.querySelector(".next-step");
    const prevBtn = step.querySelector(".prev-step");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const currentStep = quizModal.querySelector(".quiz-step.active");
        if (currentStep) {
          const nextStep = quizModal.querySelector(
            `.quiz-step[data-step="${+currentStep.dataset.step + 1}"]`
          );
          nextStep.classList.add("active");
          currentStep.classList.remove("active");
          currentNumber.innerHTML = nextStep.dataset.step;
        }
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const currentStep = quizModal.querySelector(".quiz-step.active");
        if (currentStep) {
          const prevStep = quizModal.querySelector(
            `.quiz-step[data-step="${+currentStep.dataset.step - 1}"]`
          );
          prevStep.classList.add("active");
          currentStep.classList.remove("active");
          currentNumber.innerHTML = prevStep.dataset.step;
        }
      });
    }
  });
}
