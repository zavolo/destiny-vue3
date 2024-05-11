<template>
  <form @submit.prevent="registerUser" class="size-form">
    <!-- title -->
    <div class="mb-5">
      <h1>Регистрация пользователя</h1>
    </div>

    <!-- nickname -->
    <div class="mb-3">
      <label for="validationCustom02" class="form-label">Name</label>
      <input
        v-model="nickname"
        type="text"
        class="form-control"
        id="nickname"
        required
      />
      <div class="valid-feedback">Looks good!</div>
    </div>

    <!-- email -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
      <div v-if="emailExists" class="alert alert-danger mt-2">
        Этот Email уже зарегистрирован.
      </div>
    </div>

    <!-- Password -->
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        v-model="password"
        id="password"
        class="form-control"
      />
    </div>

    <!-- confirmPassword -->
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        v-model="confirmPassword"
        id="confirmPassword"
      />
      <div
        v-if="!passwordsMatch && confirmPassword"
        class="alert alert-danger mt-2"
      >
        Пароли не совпадают!
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
      emailExists: false,
      passwordsMatch: false,
      registeredEmails: ["example@example.com", "user@domain.com"],
    };
  },

  methods: {
    registerUser() {
      this.emailExists = this.registeredEmails.includes(this.email);

      if (this.emailExists) {
        this.passwordsMatch = false; // Сбросить флаг совпадения паролей, если данные уже существуют
        return;
      }

      if (this.password.length < 6) {
        this.passwordsMatch = false; // Сбросить флаг совпадения паролей, если пароль слишком короткий
        return;
      }

      this.passwordsMatch = this.password === this.confirmPassword;

      if (!this.passwordsMatch) {
        return;
      }

      // // Очистка значений полей ввода
      // this.nickname = "";
      // this.email = "";
      // this.password = "";
      // this.confirmPassword = "";

      // Если все проверки пройдены успешно, вызываем метод register для отправки данных на сервер
      this.register();
    },

    async register() {
      try {
        const response = await axios.post(
          "https://destiny.48ru.ru/api/user-register",
          {
            nickname: this.nickname,
            email: this.email,
            password: this.password,
          }
        );
        alert(response.data.message);
        // Clear form fields after successful registration
        this.nickname = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
};
</script>

<style>
.alert {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.size-form {
  width: 25rem;
  background: #434242;
  border-radius: 2rem;
  padding: 1rem;
}
</style>