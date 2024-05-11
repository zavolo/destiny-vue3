// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// router
import { createRouter, createWebHistory } from "vue-router";

// css
import "./assets/style.css";
import "./assets/header.css";
import "./assets/page__all-seasons.css";
import "./assets/page__final-shape.css";

import axios from "axios";

import { createApp } from "vue";
import App from "./App.vue";


let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./components/page__destiny2Home.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("./components/page__news.vue"),
    },
    {
      path: "/finalShape",
      name: "finalShape",
      component: () => import("./components/page__finalShape.vue"),
    },
    {
      path: "/allSeasons",
      name: "allSeasons",
      component: () => import("./components/page__allSeasons.vue"),
    },
    {
      path: "/seasonDesire",
      name: "seasonDesire",
      component: () => import("./components/page__seasonDesire.vue"),
    },
    {
      path: "/entrance",
      name: "entrance",
      component: () =>
        import("./components/personalAccount/page__entrance.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () =>
        import("./components/personalAccount/page__registration.vue"),
    },
    {
      path: "/personalAccount",
      name: "personalAccount",
      component: () => import("./components/page__personalAccount.vue"),
    },
  
  ],
});


// router.beforeEach((to, from, next) => {
//   const offcanvasElement = document.querySelector('#offcanvasRight');
//   const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
//   bsOffcanvas.hide();
//   next();
// });

const app = createApp(App).use(router).mount("#app");

window.addEventListener("scroll", (e) => {
  let navScroll = document.querySelector(".cont-fixed").classList;
  let active_class = "active_navScroll";

  if (pageYOffset > 400) navScroll.add(active_class);
  else navScroll.remove(active_class);
});


// export const props = defineProps({
//   title: String,
//   subtitle1: String,
//   subtitle2: String,
//   description: String,
//   imageUrl: String,
//   altText: String,
//   link: String,
//   router: String,
// })