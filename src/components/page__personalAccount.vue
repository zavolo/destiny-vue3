<template>
  <section class="container">
    <div class="row align-items-center justify-content-center p-3">
      <div
        class="col-2"
        :class="{ 'active-tab': showEntrance }"
        @click="goToEntrance"
      >
        Войти
      </div>
      <div
        class="col-2"
        :class="{ 'active-tab': showRegistration }"
        @click="goToRegistration"
      >
        Регистрация
      </div>
    </div>

    <div class="row align-items-center justify-content-center p-3">
      <page__entrance v-if="showEntrance" />
      <page__registration v-if="showRegistration" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import page__entrance from "./personalAccount/page__entrance.vue";
import page__registration from "./personalAccount/page__registration.vue";

const showEntrance = ref(true);
const showRegistration = ref(false);

const goToEntrance = () => {
  showEntrance.value = true;
  showRegistration.value = false;
};

const goToRegistration = () => {
  showEntrance.value = false;
  showRegistration.value = true;
};
</script>

<style scoped>
.active-tab {
  background: #7f7d7d;
  padding: 0.6rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
}
</style>


<!-- // await axios.post('/api/login', { email: emailOrLogin.value, password: password.value }); -->
