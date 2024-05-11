<template>
  <form @submit.prevent="login" class="size-form">
    <!-- title -->
    <div class="mb-5">
      <h1>Вход пользователя</h1>
    </div>

    <div class="mb-3">
      <label for="emailOrLogin" class="form-label">Email or Username</label>
      <input
        type="text"
        class="form-control"
        id="emailOrLogin"
        v-model="emailOrLogin"
        aria-describedby="emailOrLoginHelp"
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        required
      />
    </div>

    <button type="submit" @click="loginUser" class="btn btn-primary">Submit</button>
  </form>
</template>

<!-- <template>
  <div>
    <input v-model="emailOrLogin" placeholder="Email или логин" />
    <input type="password" v-model="password" placeholder="Пароль" />
    <button @click="loginUser">Войти</button>
    <p>{{ message }}</p>
  </div>
</template> -->

<script>
import { ref } from "vue";

export default {
  setup() {
    const emailOrLogin = ref("");
    const password = ref("");
    const message = ref("");

    const loginUser = async () => {
      try {
        const response = await fetch('https://destiny.48ru.ru/api/user-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: emailOrLogin.value,
            password: password.value
          })
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          message.value = 'Успешный вход, токен сохранен!';
          // Предполагаем, что у нас есть глобальный роутер инстанс для навигации
          // this.$router.push('/profile');
        } else {
          message.value = data.message;
        }
      } catch (error) {
        message.value = 'Произошла ошибка при входе';
        console.error("Ошибка входа", error);
      }
    };

    return {
      emailOrLogin,
      password,
      loginUser,
      message
    };
  },
};
</script>



