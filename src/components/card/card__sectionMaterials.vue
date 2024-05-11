<template>
    <section class="container">
      <!-- title -->
      <div class="row mb-5">
        <div class="col-12">
          <h4 class="h2">{{ title }}</h4>
        </div>
      </div>
  
      <!-- img -->
      <div class="row row-cols-3 g-4">
        <div v-for="(image, index) in imageUrls" :key="index" class="col">
          <img
            :src="image"
            :alt="altText"
            class="img-fluid"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    title: String,
    imageUrls: Array,
    altText: String,
  });
  </script>
  
  <style scoped>
  </style>
  