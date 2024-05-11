<template>
  <div class="row p-3">
    <div class="col-4 d-flex justify-content-center">
      <img :src=" imageUrl" alt="" class="img-fluid" style="height: 12.5rem; width: 20rem;">
    </div>
    <div class="col-8">
      <h5>{{ title }}</h5>
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
</style>