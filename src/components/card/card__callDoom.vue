<template>
<card__callDoom2
  v-for="(item) in course"
  :key="item.id"
  :card="item"
></card__callDoom2>


</template>

<script setup>
const props = defineProps({
    course: {
      type: Array
    }
  })
</script>



<style scoped>
</style>
  