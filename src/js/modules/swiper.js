import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  Controller,
  Autoplay,
  Mousewheel,
  EffectCreative,
} from "swiper/modules";
import { updateVisibleSlides } from "../helpers/updateVisibleSlides.js";

export const swiper = () => {
  const homeHeroObj = document.querySelector(".home-hero");
  if (homeHeroObj) {
    const total = homeHeroObj.querySelector(".total");
    const current = homeHeroObj.querySelector(".current");
    const homeHeroSwiper = new Swiper(".home-hero-swiper", {
      modules: [
        Pagination,
        Navigation,
        EffectFade,
        EffectCreative,
        Controller,
        Autoplay,
      ],
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: false,
      speed: 1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".home-hero-prev",
        nextEl: ".home-hero-next",
      },
      pagination: {
        el: ".home-hero-pagination ",
        // type: "progressbar",
      },
      on: {
        init(swiper) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;

          // Инициализируем параллакс-эффект
          initParallax(swiper);
          setInitialTransforms(swiper);
        },
        slideChange(swiper) {
          current.innerHTML =
            swiper.activeIndex + 1 < 10
              ? `0${swiper.activeIndex + 1}`
              : swiper.activeIndex + 1;
          setInitialTransforms(swiper);
        },
        slideChangeTransitionStart(swiper) {
          updateParallax(swiper);
        },
        setTransition(swiper, duration) {
          setParallaxTransition(swiper, duration - 50);
        },
      },
    });

    const homeHeroСontentSwiper = new Swiper(".home-hero-content-swiper", {
      modules: [EffectFade, Controller],
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: false,
      effect: "fade",
    });
    const homeHeroDescrSwiper = new Swiper(".home-hero-descr-swiper", {
      modules: [EffectFade, Controller],
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: false,
      effect: "fade",
    });
    homeHeroSwiper.controller.control = [
      homeHeroСontentSwiper,
      homeHeroDescrSwiper,
    ];
  }
  const productsSwiper = new Swiper(".products-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      prevEl: ".products-prev",
      nextEl: ".products-next",
    },
    pagination: {
      el: ".products-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    on: {
      init(swiper) {
        updateVisibleSlides(this);

        const total = swiper.el.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },

      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
  });

  const comparisonPage = document.querySelector(".comparison-page");
  if (comparisonPage) {
    const tabContentList = comparisonPage.querySelectorAll(".tab-content");
    tabContentList.forEach((content) => {
      const comparisonProductsSwipers = content.querySelector(
        ".comparison-products-swiper"
      );
      const comparisonFixedSwipers = content.querySelector(
        ".comparison-fixed-swiper"
      );
      const comparisonProductsSwiper = new Swiper(comparisonProductsSwipers, {
        modules: [Pagination, Navigation, Controller],
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
          prevEl: ".products-prev",
          nextEl: ".products-next",
        },
        pagination: {
          el: ".comparison-products-pagination",
          type: "progressbar",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
        on: {
          init(swiper) {
            updateVisibleSlides(this);

            const total = swiper.el.querySelector(".total");
            if (total) {
              total.innerHTML =
                swiper.slides.length < 10
                  ? `0${swiper.slides.length}`
                  : swiper.slides.length;
            }
          },

          slideChange: function () {
            updateVisibleSlides(this);
          },
          resize: function () {
            updateVisibleSlides(this);
          },
        },
      });
      const comparisonFixedSwiper = new Swiper(comparisonFixedSwipers, {
        modules: [Pagination, Navigation, Controller],
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
          prevEl: ".comparison-fixed-prev",
          nextEl: ".comparison-fixed-next",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 24,
            allowTouchMove: false,
          },
        },
        on: {
          init: function () {
            updateVisibleSlides(this);
          },
          slideChange: function () {
            updateVisibleSlides(this);
          },
          resize: function () {
            updateVisibleSlides(this);
          },
        },
      });
      let comparisonSpecificationSwipersList = [];
      const comparisonSpecificationSwipers = content.querySelectorAll(
        ".comparison-specification-swiper"
      );
      if (comparisonSpecificationSwipers.length) {
        comparisonSpecificationSwipers.forEach((swiper) => {
          const swiperObj = new Swiper(swiper, {
            modules: [Controller],
            slidesPerView: 4,
            spaceBetween: 24,
            allowTouchMove: false,

            breakpoints: {
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
            on: {
              init(swiper) {
                updateVisibleSlides(this);

                const total = swiper.el.querySelector(".total");
                if (total) {
                  total.innerHTML =
                    swiper.slides.length < 10
                      ? `0${swiper.slides.length}`
                      : swiper.slides.length;
                }
              },

              slideChange: function () {
                updateVisibleSlides(this);
              },
              resize: function () {
                updateVisibleSlides(this);
              },
            },
          });
          comparisonSpecificationSwipersList.push(swiperObj);
        });
        comparisonProductsSwiper.controller.control = [
          ...comparisonSpecificationSwipersList,
          comparisonFixedSwiper,
        ];
        comparisonFixedSwiper.controller.control = [
          ...comparisonSpecificationSwipersList,
          comparisonProductsSwiper,
        ];
      }
    });
  }

  const homeCollectionsSwiper = new Swiper(".home-collections-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 6,
    allowTouchMove: false,
    watchSlidesProgress: true,
    navigation: {
      prevEl: ".home-collections-prev",
      nextEl: ".home-collections-next",
    },
    pagination: {
      el: ".home-collections-pagination",
      type: "progressbar",
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");

        total.innerHTML =
          swiper.slides.length < 10
            ? `0${swiper.slides.length}`
            : swiper.slides.length;
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 6,
        allowTouchMove: true,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 6,
        allowTouchMove: false,
      },
    },
  });

  const productSwiper = new Swiper(".product-swiper", {
    modules: [Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    nested: true,
    effect: "fade",
    pagination: {
      el: ".pagination",
    },
    on: {
      init(swiper) {
        const linesWrapper = swiper.el.querySelector(".lines");
        swiper.slides.forEach((slide, index) => {
          const span = document.createElement("span");
          linesWrapper.appendChild(span);
        });
        const lines = linesWrapper.querySelectorAll("span");
        lines.forEach((line, index) => {
          line.addEventListener("mouseenter", () => {
            swiper.slideTo(index);
          });
        });
        swiper.el.addEventListener("mouseleave", () => {
          swiper.slideTo(0);
        });
        const paginationWrapper =
          swiper.el.parentElement.querySelector(".pagination");
        const bullets = [];

        swiper.slides.forEach((slide, index) => {
          const bullet = document.createElement("span");
          bullet.classList.add("swiper-pagination-bullet");
          bullet.addEventListener("click", () => {
            swiper.slideTo(index);
          });
          paginationWrapper.appendChild(bullet);
          bullets.push(bullet);
        });

        // Устанавливаем активный класс для первого буллета
        bullets[0]?.classList.add("swiper-pagination-bullet-active");

        // Обновляем пагинацию при смене слайда
        swiper.on("slideChange", function () {
          bullets.forEach((bullet, index) => {
            bullet.classList.toggle(
              "swiper-pagination-bullet-active",
              index === swiper.activeIndex
            );
          });
        });
      },
    },
  });
  const homeIdeasThumbsSwiper = new Swiper(".home-ideas-thumbs-swiper", {
    modules: [Pagination, EffectFade, Thumbs],
    slidesPerView: "auto",
    spaceBetween: 4,
    allowTouchMove: false,
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      767: {
        allowTouchMove: false,
      },
    },
  });
  const homeIdeasSwiper = new Swiper(".home-ideas-swiper", {
    modules: [Navigation, EffectFade, Thumbs, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    // effect: "fade",
    // mousewheel: true,
    speed: 1500,
    navigation: {
      prevEl: ".home-ideas-prev",
      nextEl: ".home-ideas-next",
    },
    thumbs: {
      swiper: homeIdeasThumbsSwiper,
    },
    on: {
      init(swiper) {
        initParallax(swiper);
        setInitialTransforms(swiper);
      },
      slideChangeTransitionStart(swiper) {
        updateParallax(swiper);
      },
      setTransition(swiper, duration) {
        setParallaxTransition(swiper, duration - 50);
      },
      slideChange(swiper) {
        const homeIdeas = document.querySelector(".home-ideas");
        if (homeIdeas) {
          const pinWrappers = homeIdeas.querySelectorAll(".pin-wrapper");
          pinWrappers.forEach((wrapper) => {
            const pin = wrapper.querySelector(".pin");
            const card = wrapper.querySelector(".product-card");
            pin.classList.remove("active");
            card.classList.remove("active");
          });
        }
        setInitialTransforms(swiper);
      },
    },
  });
  const brandsListSwiper = new Swiper(".brands-list-swiper ", {
    modules: [Pagination],
    slidesPerView: 3,
    spaceBetween: 5,
    allowTouchMove: false,
    pagination: {
      el: ".home-brands-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
    on: {
      init(swiper) {
        const total = swiper.el.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
    },
  });
  const singleSwiperWrapper = document.querySelector(".single-swiper-wrapper ");
  if (singleSwiperWrapper) {
    const prev = singleSwiperWrapper.querySelector(".single-swiper-prev");
    const next = singleSwiperWrapper.querySelector(".single-swiper-next");
    const singleSwiper = new Swiper(".single-swiper", {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: false,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },

      on: {
        init: function (swiper) {
          updateVisibleSlides(this);
        },
        slideChange: function () {
          updateVisibleSlides(this);
        },
        resize: function () {
          updateVisibleSlides(this);
        },
      },
    });
  }

  const doubleSwiper = new Swiper(".double-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".double-swiper-prev",
      nextEl: ".double-swiper-next",
    },
    pagination: {
      el: ".double-swiper-pagination",
      type: "progressbar",
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");

        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowTouchMove: false,
      },
    },
  });
  const profileMenuSwiper = new Swiper(".profile-menu-swiper", {
    modules: [Pagination],
    slidesPerView: 1.2,
    spaceBetween: 10,
    allowTouchMove: false,
    pagination: {
      el: ".profile-menu-swiper-pagination",
      type: "progressbar",
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.parentElement.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowTouchMove: false,
      },
    },
  });

  const tripleSwiper = new Swiper(".triple-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".triple-swiper-prev",
      nextEl: ".triple-swiper-next",
    },
    pagination: {
      el: ".triple-swiper-pagination",
      type: "progressbar",
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 24,
        allowTouchMove: false,
      },
    },
  });
  const careerStagesSwiper = new Swiper(".career-stages-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".career-stages-prev",
      nextEl: ".career-stages-next",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");

        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        pagination: {
          el: ".career-stages-pagination",
          type: "progressbar",
        },
        allowTouchMove: true,
      },
      767: {
        pagination: {
          el: ".pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        allowTouchMove: false,
      },
    },
  });
  const careerAdaptationSwiper = new Swiper(".career-adaptation-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".career-adaptation-prev",
      nextEl: ".career-adaptation-next",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        pagination: {
          el: ".career-adaptation-pagination",
          type: "progressbar",
        },
        allowTouchMove: true,
      },
      767: {
        pagination: {
          el: ".pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        allowTouchMove: false,
      },
    },
  });
  const careerWorkSwiper = new Swiper(".career-work-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1.7,
    spaceBetween: 269,
    centeredSlides: true,
    allowTouchMove: false,
    navigation: {
      prevEl: ".career-work-prev",
      nextEl: ".career-work-next",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    on: {
      init: function (swiper) {
        updateVisibleSlides(this);
        const total = swiper.el.querySelector(".total");
        if (total) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
        }
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
    breakpoints: {
      0: {
        pagination: {
          el: ".career-work-pagination",
          type: "progressbar",
        },
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        pagination: {
          el: ".pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        allowTouchMove: false,
        slidesPerView: 1.7,
        spaceBetween: 269,
      },
    },
  });
  const productInfoSwiperThumbs = new Swiper(".product-info-swiper-thumbs", {
    modules: [Pagination, Navigation, Thumbs, Mousewheel],
    slidesPerView: 6.2,
    spaceBetween: 10,
    direction: "vertical",
    mousewheel: true,
  });
  const productInfoSwiper = new Swiper(".product-info-swiper", {
    modules: [Pagination, Navigation, Thumbs],
    slidesPerView: 1,
    spaceBetween: 269,
    pagination: {
      el: ".product-info-pagination",
    },
    thumbs: {
      swiper: productInfoSwiperThumbs,
    },
  });
  const productInfoModalSwiperThumbs = new Swiper(
    ".product-info-modal-swiper-thumbs",
    {
      modules: [Pagination, Navigation, Thumbs, Mousewheel],
      slidesPerView: 6.2,
      spaceBetween: 10,
      direction: "vertical",
      mousewheel: true,
    }
  );
  const productInfoModalSwiper = new Swiper(".product-info-modal-swiper", {
    modules: [Pagination, Navigation, Thumbs],
    slidesPerView: 1,
    spaceBetween: 269,
    pagination: {
      el: ".product-info-modal-pagination",
    },
    thumbs: {
      swiper: productInfoModalSwiperThumbs,
    },
  });

  // Устанавливаем начальное смещение для всех изображений
  function setInitialTransforms(swiper) {
    swiper.slides.forEach((slide, index) => {
      const img = slide.querySelector("img");
      if (!img) return;

      // Если слайд не активный, смещаем его влево или вправо
      if (index < swiper.activeIndex) {
        img.style.transform = "translateX(40%)";
      } else if (index > swiper.activeIndex) {
        img.style.transform = "translateX(-40%)";
      } else {
        img.style.transform = "translateX(0)";
      }
    });
  }
  // Функции для параллакс-эффекта
  function initParallax(swiper) {
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (img) {
        img.style.transition = "transform 1500ms ease-out";
        img.style.willChange = "transform";
        img.style.transform = "translateX(0)";
      }
    });
  }

  function updateParallax(swiper) {
    if (!swiper || swiper.destroyed) return;

    const speed = swiper.params.speed;
    const isNext = swiper.activeIndex > swiper.previousIndex;
    const direction = isNext ? 1 : -1;

    // Текущий слайд (активный после перехода)
    const currentSlide = swiper.slides[swiper.activeIndex];
    const currentImg = currentSlide.querySelector("img");

    // Предыдущий слайд (уходящий)
    const prevSlide = swiper.slides[swiper.previousIndex];
    const prevImg = prevSlide?.querySelector("img");

    // Параллакс-эффект
    if (currentImg) {
      currentImg.style.transform = `translateX(${40 * direction}%)`;
      requestAnimationFrame(() => {
        currentImg.style.transform = "translateX(0)";
      });
    }

    if (prevImg) {
      prevImg.style.transform = `translateX(${40 * direction}%)`;
    }
  }

  function setParallaxTransition(swiper, duration) {
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (img) {
        img.style.transitionDuration = `${duration}ms`;
      }
    });
  }
};
