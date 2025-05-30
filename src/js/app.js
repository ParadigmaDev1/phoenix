import "./modules/tabs.js";
import "./modules/accordion.js";
import "./modules/swiper.js";
import "./modules/map.js";
import "./modules/modals.js";
import "./modules/fancy.js";
import "./modules/inputs-mask.js";
import "./modules/video.js";
import "../pug/components/header/header.js";
import "../pug/components/selector/selector.js";
import "../pug/components/map/map.js";
import "../pug/components/profile-menu/profile-menu.js";
import "../pug/components/mobile-menu/mobile-menu.js";
import "../pug/components/catalog-menu/catalog-menu.js";

if (document.querySelector(".product-card")) {
  import(
    /* webpackChunkName: "product-card" */ "../pug/components/product-card/product-card.js"
  );
}
if (document.querySelector(".marquee")) {
  import(/* webpackChunkName: "marquee" */ "./modules/marquee.js");
}
if (document.querySelector(".values-block")) {
  import(
    /* webpackChunkName: "values-block" */ "../pug/components/values-block/values-block.js"
  );
}
if (document.querySelector(".document-card")) {
  import(
    /* webpackChunkName: "document-card" */ "../pug/components/document-card/document-card.js"
  );
}
if (document.querySelector(".quiz-modal")) {
  import(
    /* webpackChunkName: "quiz-modal" */ "../pug/modals/quiz-modal/quiz-modal.js"
  );
}
if (document.querySelector(".brands-list")) {
  import(
    /* webpackChunkName: "brands-list" */ "../pug/components/brands-list/brands-list.js"
  );
}
if (document.querySelector(".form")) {
  import(/* webpackChunkName: "validate" */ "./modules/validate.js");
}
if (document.querySelector(".home-collections")) {
  import(
    /* webpackChunkName: "home-collections" */ "../pug/pages/home/home-collections/home-collections.js"
  );
}
if (document.querySelector(".home-ideas")) {
  import(
    /* webpackChunkName: "home-ideas" */ "../pug/pages/home/home-ideas/home-ideas.js"
  );
}
if (document.querySelector(".cart-page")) {
  import(/* webpackChunkName: "cart" */ "../pug/pages/cart/cart.js");
}
if (document.querySelector(".wholesale-orders")) {
  import(
    /* webpackChunkName: "wholesale-orders" */ "../pug/pages/wholesale-orders/wholesale-orders.js"
  );
}
if (document.querySelector(".wholesale-loyalty-program-conditions")) {
  import(
    /* webpackChunkName: "wholesale-loyalty-program-conditions" */
    "../pug/pages/wholesale-loyalty-program-conditions/wholesale-loyalty-program-conditions.js"
  );
}
if (document.querySelector(".wholesale-knowledge-base-article")) {
  import(
    /* webpackChunkName: "wholesale-knowledge-base-article" */
    "../pug/pages/wholesale-knowledge-base-article/wholesale-knowledge-base-article.js"
  );
}
if (document.querySelector(".retail-customer-making-order")) {
  import(
    /* webpackChunkName: "retail-customer-making-order" */
    "../pug/pages/retail-customer-making-order/retail-customer-making-order.js"
  );
}
if (document.querySelector(".wholesale-making-order")) {
  import(
    /* webpackChunkName: "wholesale-making-order" */ "../pug/pages/wholesale-making-order/wholesale-making-order.js"
  );
}
if (document.querySelector(".product-item-inner")) {
  import(
    /* webpackChunkName: "product-item-inner" */
    "../pug/pages/retail-customer-product/retail-customer-product-info/retail-customer-product-info.js"
  );
}
if (document.querySelector(".catalog")) {
  import(/* webpackChunkName: "catalog" */ "../pug/pages/catalog/catalog.js");
}
if (document.querySelector(".wholesale-documents")) {
  import(
    /* webpackChunkName: "wholesale-document" */ "../pug/pages/wholesale-documents/wholesale-documents.js"
  );
}
if (document.querySelector(".comparison-page")) {
  import(
    /* webpackChunkName: "comparison-page" */ "../pug/pages/comparison/comparison.js"
  );
}
if (document.querySelector(".fixed-order-form")) {
  import(
    /* webpackChunkName: "fixed-order-form" */
    "../pug/pages/retail-customer-product/fixed-order-form/fixed-order-form.js"
  );
}
