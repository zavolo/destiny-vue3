<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ title }}
    </a>

    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" @click="navigateTo(route1)">
          {{ subtitle1 }}
        </a>
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a class="dropdown-item" @click="navigateTo(route2)">{{ subtitle2 }}</a>
      </li>
    </ul>
  </li>
</template>
    
<script setup>
 import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  subtitle1: String,
  subtitle2: String,
  route1: String,
  route2: String
});

const router = useRouter();

function navigateTo(route) {
  router.push(route);
}
</script>
    
  <style scoped>
</style>