<template>
  <div class="col position-relative">
    <img
      :src="imageUrl"
      :alt="altText"
      class="img-fluid all-seasons__img-size all-seasons__hover" 
      :class="class"
    />

    <div class="col-12 position-absolute bottom-0 start-0 ps-5 text-white">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
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
  class: String
});
</script>
  
  <style scoped>
</style>