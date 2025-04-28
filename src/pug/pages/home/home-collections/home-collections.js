export const homeCollections = () => {
  const homeCollectionsSwiper = document.querySelector(
    ".home-collections-swiper"
  );

  if (homeCollectionsSwiper && window.innerWidth > 767) {
    const slides = homeCollectionsSwiper.querySelectorAll(".swiper-slide");

    // Обновляет класс active у swiper-контейнера
    const updateSwiperActiveState = () => {
      const hasSelectedSlide = homeCollectionsSwiper.querySelector(
        ".swiper-slide.selected"
      );
      homeCollectionsSwiper.classList.toggle("active", !!hasSelectedSlide);
    };

    // Обработчик клика по слайду
    const handleSlideClick = (clickedSlide) => {
      const visibleSlides = homeCollectionsSwiper.querySelectorAll(
        ".swiper-slide.visible-slide"
      );
      const prevSelected = homeCollectionsSwiper.querySelector(
        ".swiper-slide.selected"
      );

      // Снимаем выделение с предыдущего выбранного слайда и добавляем compressed
      if (prevSelected) {
        prevSelected.classList.remove("selected");
        prevSelected.classList.add("compressed");
      }

      // Устанавливаем новый выбранный слайд
      clickedSlide.classList.add("selected");
      clickedSlide.classList.remove("compressed");

      // Все видимые слайды, кроме нового выбранного, получают compressed
      visibleSlides.forEach((slide) => {
        if (slide !== clickedSlide) {
          slide.classList.add("compressed");
        }
      });

      updateSwiperActiveState();
    };

    // Обработчик закрытия слайда
    const handleCloseSlide = (closedSlide) => {
      const visibleSlides = homeCollectionsSwiper.querySelectorAll(
        ".swiper-slide.visible-slide"
      );

      closedSlide.classList.remove("selected");
      closedSlide.classList.remove("compressed");

      // Убираем compressed у всех видимых слайдов
      visibleSlides.forEach((slide) => {
        slide.classList.remove("compressed");
      });

      updateSwiperActiveState();
    };

    // Назначаем обработчики
    slides.forEach((slide) => {
      const closeBtn = slide.querySelector(".close-btn");

      // Закрытие слайда
      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          if (!slide.classList.contains("visible-slide")) return;
          e.stopPropagation();
          handleCloseSlide(slide);
        });
      }

      // Выбор слайда
      slide.addEventListener("click", () => {
        if (!slide.classList.contains("visible-slide")) return;
        handleSlideClick(slide);
      });
    });

    // Инициализация (на случай, если есть selected при загрузке)
    updateSwiperActiveState();
  }
};
