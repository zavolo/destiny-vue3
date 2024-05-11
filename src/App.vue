<template>
  <!-- header -->
  <header class="container-fluid cont-fixed">
    <page__header />
  </header>

  <test_api :columns="columns" />
  <RouterView />

  <!-- footer -->
  <footer class="container">
    <page__footer />
  </footer>
</template>

<script setup>
import page__header from "./components/page__header.vue";
import page__footer from "./components/page__footer.vue";
import card__callDoom from "./components/card/card__callDoom.vue";
import card__callDoom2 from "./components/card/card__callDoom2.vue";
import test_api from "./components/test_api.vue";
import page__registration from "./components/personalAccount/page__registration.vue";
import page__entrance from "./components/personalAccount/page__entrance.vue";
import page__personalAccount from "./components/page__personalAccount.vue";
import test__menu from "./components/test__menu.vue";
import page__destiny2Home from "./components/page__destiny2Home.vue";

import { ref } from "vue";

const columns = ref([
  { title: "ID", key: "id", minWidth: true },
  { title: "Имя пользователя", key: "username" },
  { title: "Имя", key: "name" },
  { title: "Email", key: "email" },
  { title: "Телефон", key: "phone" },
]);
const course = ref([
  {
    id: 1,
    imageUrl:
      "https://www.destinythegame.com/content/dam/destiny/tfs/story/tfs-story-img1.jpg",
    altText: "...",
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
  {
    id: 2,
    imageUrl: "...",
    altText: "...",
    title: "Card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
  },
]);
</script>

<style scoped>
</style>
