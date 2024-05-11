<template>
  <div :class="class" class="col-8 d-flex justify-content-center flex-column">
    <p class="fs-5 font-monospace subtitle__spacing">{{ subtitle }}</p>
    <h1 class="mb-4 title__text-fs">{{ title }}</h1>
    <p class="description__text-fs">{{ description }}</p>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  class: String,
  subtitle: String,
});
</script>
  
<style scoped>
.subtitle__spacing {
  letter-spacing: 0.6rem;
}

.title__text-fs {
  font-size: 4rem;
  font-weight: 400;
}
.description__text-fs {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>