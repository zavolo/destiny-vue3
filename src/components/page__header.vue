<template>
  <!-- navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    @click="$emit('close')"
  >
    <div class="container-fluid px-3">
      <!-- logo -->
      <a class="navbar-brand" @click="handleClick">
        <img
          src="https://www.bungie.net/img/theme/bungienet/bungie_logo_with_shield.svg"
          alt="Bootstrap"
          width="120"
          height="30"
        />
      </a>

      <!-- Toggler button -->
      <button
        @click="handleClick"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas -->
      <div
        class="offcanvas offcanvas-end bg-dark text-light desktop-hidden"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref="offcanvasMenu"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <componentAccordion
              title="destiny2"
              subtitle1="финальная форма"
              route1="/finalShape"
              @click="closeOffcanvas()"
              id="one"
              number="#one"
            />

            <componentAccordion
              title="Сезоны"
              subtitle1='Сезон "желание"'
              subtitle2="Прошлые сезоны"
              route1="/seasonDesire"
              route2="/allSeasons"
              @click="closeOffcanvas()"
              id="two"
              number="#two"
            />

            <componentAccordion
              title="Сообщества"
              subtitle1="Форум"
              subtitle2="Новости"
              route1=""
              route2="/news"
              @click="closeOffcanvas()"
              @close="closeOffcanvas"
              id="three"
              number="#three"
            />
          </div>
        </div>
      </div>

      <!-- body -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- destiny -->
          <componentTitle
            title="Destiny2"
            subtitle1="финальная форма"
            route1="/finalShape"
          />

          <!-- seasons -->
          <componentTitle
            title="Сезоны"
            subtitle1='Сезон "желание"'
            subtitle2="Прошлые сезоны"
            route1="/seasonDesire"
            route2="/allSeasons"
          />

          <!-- communities -->
          <componentTitle
            title="Сообщества"
            subtitle1="Форум"
            subtitle2="Новости"
            route1=""
            route2="/news"
          />
        </ul>

        <ul class="navbar-nav">
          <!-- Личный кабинет -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="mdi-account-multiple-outline"
            viewBox="0 0 24 24"
            @click="$router.push('/personalAccount')"
          >
            <path
              d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z"
            />
          </svg>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import componentTitle from "./header-components/componentTitle.vue";
import componentAccordion from "./header-components/componentAccordion.vue";

// const closeOffcanvas = () => {
//   const offcanvasElement = $refs.offcanvasMenu;
//   const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
//   bsOffcanvas.hide();
// };

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const offcanvasOpen = ref(true);

async function closeOffcanvas() {
  // Здесь логика для закрытия offcanvas
  offcanvasOpen.value = false;
}

async function handleClick() {
  await closeOffcanvas();
  router.push("/home");
}
</script>
<style>
    svg {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }

    /* Изначальный цвет пути */
    svg path {
        fill: rgb(140, 140, 140); /* Черный цвет */
        transition: fill 0.3s; /* Плавное изменение цвета */
    }

    /* Изменение цвета при наведении */
    svg:hover path {
        fill: white;
    }

.offcanvas,
.offcanvas-lg,
.offcanvas-md,
.offcanvas-sm,
.offcanvas-xl,
.offcanvas-xxl {
  --bs-offcanvas-width: 100%;
}

@media (min-width: 992px) {
  .desktop-hidden {
    display: none; /* Скрывает элементы в десктопной версии */
  }
}
</style>