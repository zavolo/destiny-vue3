<template>
  <div class="card bg-dark text-light">
    <img :src="imageUrl" class="card-img-top rounded-2" :alt="altText" />
    <div class="card-body">
      <h5 class="card-title mb-5">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
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
.card {
  --bs-card-border-width: none;
}
</style>