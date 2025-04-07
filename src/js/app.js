import { tabs } from "./modules/tabs.js";
import { accordionFunc } from "./modules/accordion.js";
import { swiper } from "./modules/swiper.js";
import { map } from "./modules/map.js";
import { modals } from "./modules/modals.js";
import { validateForm } from "./modules/validate.js";
import { fancy } from "./modules/fancy.js";
import IMask from "imask";

accordionFunc();
tabs();
modals();
swiper();
map();
modals();
validateForm();
fancy();

import "../pug/components/selector/selector.js";
import "../pug/components/header/header.js";
import "../pug/components/map/map.js";
import "../pug/components/brands-list/brands-list.js";
import "../pug/components/mobile-menu/mobile-menu.js";
import "../pug/components/product-card/product-card.js";
import "../pug/components/catalog-menu/catalog-menu.js";
import "../pug/components/values-block/values-block.js";
import "../pug/pages/home/home-collections/home-collections.js";
import "../pug/pages/home/home-ideas/home-ideas.js";

document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(".marquee__group");
  if (wrappers.length) {
    wrappers.forEach((wrapper) => {
      wrapper.innerHTML += wrapper.innerHTML;
    });
  }
});
