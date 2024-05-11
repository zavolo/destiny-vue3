<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="number"
        aria-expanded="false"
        :aria-controls="id"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="id"
      class="accordion-collapse collapse bg-dark text-light"
      data-bs-parent="#accordionFlushExample"
    >
      <ul class="accordion-body navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <a class="dropdown-item" @click="navigateTo(route1)">
            {{ subtitle1 }}
          </a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" @click="navigateTo(route2)">{{
            subtitle2
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
      
  <script setup>
import { useRouter } from "vue-router";
import componentTitle from "./componentTitle.vue";

const props = defineProps({
  title: String,
  subtitle1: String,
  subtitle2: String,
  route1: String,
  route2: String,
  id: String,
  number: String
});

const router = useRouter();

function navigateTo(route) {
  router.push(route);
}
</script>