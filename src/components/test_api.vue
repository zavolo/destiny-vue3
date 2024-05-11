<template>
  <div class="container">
    <div class="row">
      <div class="col" >
        <div v-for="column in columns" :key="column.key">
          {{ column.title }}: {{ userData[column.key] }}
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  columns: {
    type: Array
  }
});



const userData = ref({
  id: 1,
  username: "john_doe",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890"
});
</script>