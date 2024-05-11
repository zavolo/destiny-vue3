
<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <!-- logo -->
      <a class="navbar-brand" @click="$router.push('/home')">
        <img
          src="https://www.bungie.net/img/theme/bungienet/bungie_logo_with_shield.svg"
          alt="Bootstrap"
          width="110"
          height="20"
        />
      </a>

      <!-- body -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- destiny -->
          <li
            class="nav-item dropdown"
            @mouseenter="showDestinyDropdown = true"
            @mouseleave="showDestinyDropdown = false"
          >
            <a
              class="nav-link dropdown-toggle text-uppercase"
              @click="$router.push('/home')"
              role="button"
            >
              Destiny2
            </a>
            <ul class="dropdown-menu" v-show="showDestinyDropdown">
              <li>
                <a class="dropdown-item" @click="$router.push('/finalShape')"
                  >финальная форма</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>

          <!-- seasons -->
          <li
            class="nav-item dropdown"
            @mouseenter="showSeasonsDropdown = true"
            @mouseleave="showSeasonsDropdown = false"
          >
            <a class="nav-link dropdown-toggle text-uppercase" role="button">
              seasons
            </a>
            <ul class="dropdown-menu" v-show="showSeasonsDropdown">
              <li>
                <a class="dropdown-item" @click="$router.push('/seasonDesire')"
                  >сезон "желание"</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" @click="$router.push('/allSeasons')"
                  >seasons</a
                >
              </li>
            </ul>
          </li>

          <!-- communities -->
          <li
            class="nav-item dropdown"
            @mouseenter="showCommunitiesDropdown = true"
            @mouseleave="showCommunitiesDropdown = false"
          >
            <a class="nav-link dropdown-toggle" href="#" role="button">
              сообщества
            </a>
            <ul class="dropdown-menu" v-show="showCommunitiesDropdown">
              <li><a class="dropdown-item" href="#">форум</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" @click="$router.push('/news')"
                  >новости</a
                >
              </li>
            </ul>
          </li>
        </ul>

        <div class="row pe-4">
          <div class="user-account">
            <a class="btn-play btn btn-sm btn-outline-warning" href="#"
              >play destiny2</a
            >
          </div>
        </div>

        <div class="row">
          <div
            class="nav-item dropdown"
            @mouseenter="showAccountDropdown = true"
            @mouseleave="showAccountDropdown = false"
          >
            <a
              class="nav-link dropdown-toggle text-uppercase"
              href="#"
              role="button"
            >
              моя учетная запись
            </a>
            <ul class="dropdown-menu" v-show="showAccountDropdown">
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push('/personalAccount')"
                  >Личный кабинет</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">seasons</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showDestinyDropdown = ref(false);
const showSeasonsDropdown = ref(false);
const showCommunitiesDropdown = ref(false);
const showAccountDropdown = ref(false);
</script>