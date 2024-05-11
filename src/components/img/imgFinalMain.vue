<template>
  <div class="position-relative final-main-wrap__img-grid overflow"  style="height: 12rem;">
    <img
      :src="imageUrl"
      class="img-fluid f"
      style="height: 12rem;"
    />

    <p class="position-absolute bottom-0 start-0 d-flex w-100 justify-content-center">{{ title }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  altText: String,
  link: String,
});
</script>

<style scoped>
</style>