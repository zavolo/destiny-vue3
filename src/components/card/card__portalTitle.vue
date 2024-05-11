<template>
  <div class="col-6 d-flex justify-content-center flex-column">
    <h2 class="h2 mb-3">{{ title }}</h2>

    <p>{{ description }}</p>
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