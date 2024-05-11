<template>
     <div class="col">
        <img
          :src="imageUrl"
          alt=""
          class="img-fluid"
        />
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