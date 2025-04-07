import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  Controller,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import { updateVisibleSlides } from "../helpers/updateVisibleSlides.js";
export const swiper = () => {
  const homeHeroObj = document.querySelector(".home-hero");
  if (homeHeroObj) {
    const total = homeHeroObj.querySelector(".total");
    const homeHeroSwiper = new Swiper(".home-hero-swiper", {
      modules: [Pagination, Navigation, EffectFade, Controller, Autoplay],
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: false,
      effect: "fade",
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
        type: "progressbar",
      },
      on: {
        init(swiper) {
          total.innerHTML =
            swiper.slides.length < 10
              ? `0${swiper.slides.length}`
              : swiper.slides.length;
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
  });
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
    effect: "fade",
    // mousewheel: true,
    navigation: {
      prevEl: ".home-ideas-prev",
      nextEl: ".home-ideas-next",
    },
    thumbs: {
      swiper: homeIdeasThumbsSwiper,
    },
    on: {
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

        total.innerHTML =
          swiper.slides.length < 10
            ? `0${swiper.slides.length}`
            : swiper.slides.length;
      },
    },
  });
  const doubleSwiper = new Swiper(".double-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".double-swiper-prev",
      nextEl: ".double-swiper-next",
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
  const tripleSwiper = new Swiper(".triple-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    allowTouchMove: false,
    navigation: {
      prevEl: ".triple-swiper-prev",
      nextEl: ".triple-swiper-next",
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
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
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
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
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
      },
      slideChange: function () {
        updateVisibleSlides(this);
      },
      resize: function () {
        updateVisibleSlides(this);
      },
    },
  });
};
