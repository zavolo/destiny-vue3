<template>
  <section class="trailer" v-if="showTrailer">
    <div class="content">
      <svg
        @click="closeTrailer"
        viewBox="-0.5 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="height: 30px; cursor: pointer"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M3 21.32L21 3.32001"
            stroke="grey"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 3.32001L21 21.32"
            stroke="grey"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
      <!-- <video
        src="/public/img/trailer.mp4"
        controls
        width="100%"
        height="95%"
        autoplay
        muted
      ></video> -->
    </div>
  </section>

  <!-- banner -->
  <section class="container-fluid position-relative">
    <img
      src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blta6cc024a6a8d1a33/6564c8e252b29b28d95c0551/s23-media-trailer-01.jpg?format=webp"
      alt=""
      class="img-fluid"
    />

    <div
      class="row position-absolute top-50 start-50 translate-middle flex-column align-items-center"
    >
      <div class="col img__final-shape">
        <img
          src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltaf0027d68334d58b/6564f34748602b500b2c3990/s23-logo-ru.svg"
          alt=""
          class="img-fluid"
          style="height: 12rem"
        />
      </div>
      <div class="col d-flex justify-content-center title-fs">
        <button
          class="btn btn-play btn btn-sm btn-warning px-3 py-2 text-uppercase text-light"
          @click="openTrailer"
        >
          смотреть треллер
        </button>
      </div>
    </div>
  </section>

  <!-- menu -->
  <nav
    id="navbar-example2"
    class="navbar bg-body-tertiary px-3 mb-3 justify-content-center"
  >
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#plot">Сюжет</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#building">Здания</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#gear">Снаряжение</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#materials">Материалы</a>
      </li>
    </ul>
  </nav>
  <div
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-root-margin="0px 0px -40%"
    data-bs-smooth-scroll="true"
    class="scrollspy-example rounded-2"
    tabindex="0"
  >
    <!-- Plot -->
    <section class="container-fluid" id="plot">
      <img
        src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt7470da6102f38216/654e5f45cf92374ce11b8b44/s23-story-xl.jpg?width=1920"
        alt=""
        class="img-fluid"
      />

      <!-- title -->
      <div class="row justify-content-center mb-5">
        <div class="col-6 d-flex flex-column align-items-center">
          <h2 class="mb-3">Грезы драконов</h2>
          <p class="text-center">
            Дверь в Бледное сердце по-прежнему закрыта. Союз с Ульем не
            сложился, и древние тайны ведут нас в Город Грез – к последним
            Ахамкарам и к пятнадцатому желанию.Ключ к Бледному сердцу нельзя
            забрать. Его можно лишь получить.
          </p>
        </div>
      </div>
    </section>

    <!-- building -->
    <section class="container-fluid" id="building">
      <img
        src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt9010abd376b70da3/654ced5eb4ccc3040a59495e/s23-activity-xl.jpg?width=1920"
        alt=""
        class="img-fluid"
      />
      <div class="row justify-content-center mb-5">
        <div class="col-6 d-flex flex-column align-items-center">
          <h2 class="mb-3">Логово Ривен</h2>
          <p class="text-center">
            Исполняющие желания Ахамкары находятся на грани вымирания, и
            последние сохранившиеся их яйца дремлют в пещерах под Городом Грез.
            В обмен на помощь в спасении своего вида Ривен обещает исполнить для
            нас ровно одно желание.
          </p>
        </div>
      </div>

      <!-- card -->
      <div class="row row-cols-lg-2 row-cols-ms-1">
        <card__callDoom2
          image-url="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt5e9e22963df05d08/654d577b45c7f1040abcb4b0/s23-activity-img1-full.jpg"
          title="На поиски приключений"
          description="Очистите лабиринт от врагов Ривен, откройте новые пути, найдите утерянные сокровища и спасите пропавшие яйца Ахамкар."
        />
        <card__callDoom2
          image-url="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt4508c30f42e92d77/654d577bbb246f040a4dc93f/s23-activity-img2-full.jpg"
          title="Выберите сложность по вкусу"
          description="Откройте все пути и найдите тайную комнату. Она откроется лишь тем, кто покорил Спираль."
        />
      </div>
    </section>

    <section class="container-fluid position-relative">
      <img
        src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt680be103fedf602d/654ced5f1d4362040ac4fc76/s23-mission-xl.jpg"
        alt=""
        class="img-fluid"
      />

      <!-- title -->
      <div class="row position-absolute top-50 start-50 translate-middle">
        <div class="col">
          <h2 class="mb-3">Предначертано звездами</h2>
          <p class="">
            Пусть звезды укажут вам путь через Город Грез и его пещеры.
            Выполните задание и получите таящееся в Черном саду оружие,
            наделенное великой силой.
          </p>
        </div>
      </div>
    </section>

    <!-- gear -->
    <section class="container-fluid position-relative" id="gear">
      <img
        src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt051f2ff9891df709/655240017c884f912a0fb2db/s23-exoticbg-xl.jpg"
        alt=""
        class="img-fluid"
      />
      <div class="row position-absolute top-50 start-50 translate-middle">
        <div class="col-6">
          <img
            src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltee1a0af7f7b3ff13/65524001a8c6413482e7fc32/s23-exoticw.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-6 p-3 d-flex flex-column justify-content-center">
          <!-- title -->
          <div class="row">
            <div class="col">
              <h2 class="mb-3">Хранитель желаний</h2>
              <p class="">
                «Хранитель желаний» – одно из сокровищ Черного сада. Заряжайте
                его, уничтожая врагов, и ставьте ловушки для тех, кто пока жив.
              </p>
              <div class="col d-flex justify-content-end">
                <img
                  src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt8a5c37316a3fc265/6568eaea04116d8dcc2a210c/s23-exotic-trailer.jpg"
                  alt=""
                  class="img-fluid"
                  style="height: 11rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- materials -->
    <section class="container" id="materials">
      <div class="row mb-5 fs-5">
        <div class="col-12">Материалы</div>
      </div>

      <div class="row">
        <div class="col-12 mb-3">
          <button
            @click="toggleTab('one')"
            :class="{
              'btn btn-outline-light link-tab btn_active': activeTab === 'one',
              'btn btn-outline-light link-tab': activeTab !== 'one',
            }"
          >
            Таб 1
          </button>
          <button
            @click="toggleTab('two')"
            :class="{
              'btn btn-outline-light link-tab btn_active': activeTab === 'two',
              'btn btn-outline-light link-tab': activeTab !== 'two',
            }"
          >
            Таб 2
          </button>
          <button
            @click="toggleTab('three')"
            :class="{
              'btn btn-outline-light link-tab btn_active':
                activeTab === 'three',
              'btn btn-outline-light link-tab': activeTab !== 'three',
            }"
          >
            Таб 3
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div
            class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 box"
            v-if="activeTab === 'one'"
          >
            <div v-for="n in 6" :key="n" class="col">
              <img
                src="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div
            class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 box"
            v-if="activeTab === 'two'"
          >
            <div class="col">
              <img
                src="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div
            class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 box"
            v-if="activeTab === 'three'"
          >
            <div v-for="n in 5" :key="n" class="col">
              <img
                src="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import card__callDoom2 from "./card/card__callDoom2.vue";

const showTrailer = ref(false);

const openTrailer = () => {
  document.body.classList.add("no-scroll");
  showTrailer.value = true;
};

const closeTrailer = () => {
  document.body.classList.remove("no-scroll");
  showTrailer.value = false;
};

onMounted(() => {
  if (showTrailer.value) {
    document.body.classList.add("no-scroll");
  }
});

onUnmounted(() => {
  document.body.classList.remove("no-scroll");
});
</script>
<script>
//   materials
export default {
  data() {
    return {
      activeTab: "one",

      showTrailer: false,
    };
  },
  methods: {
    toggleTab(path) {
      this.activeTab = path;
    },

    openTrailer() {
      this.showTrailer = true;
      document.body.style.overflowY = "hidden";
    },
    closeTrailer() {
      this.showTrailer = false;
      document.body.style.overflowY = "visible";
    },
  },
};
</script>
<style scoped>
.no-scroll {
  overflow: hidden;
}

.trailer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.trailer .content {
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  position: relative;
}

.container-fluid {
  position: relative;
}

.img-final-shape {
  display: flex;
  justify-content: center;
}

.title-fs {
  font-size: 1.5rem;
}

.btn-play {
  cursor: pointer;
  font-weight: bold;
}

.btn_active {
  background-color: #ffc107;
  color: black;
}

.link-tab {
  margin-right: 10px;
}

.box {
  margin-top: 20px;
}

.box img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .trailer .content {
    width: 90%;
    height: 90%;
  }
}
</style>
