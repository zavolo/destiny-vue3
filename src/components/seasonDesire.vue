

<template>
  <section class="trailer" v-if="showTrailer">
    <div class="content">
      <svg @click="closeTrailer" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 30px; cursor: pointer;">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M3 21.32L21 3.32001" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 3.32001L21 21.32" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
      <video src="/public/img/trailer.mp4" controls width="100%" height="95%"></video>
    </div>
  </section>

  <section class="banner">
    <div class="content">
      <img src="/public/img/logo.svg" alt="Логотип">
      <button @click="openTrailer">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490; fill: white; height: 20px;" xml:space="preserve">
          <g><path d="M33.299,245v245l423.402-245L33.299,0V245z M190.579,245l202.992,0L70.27" /></g>
        </svg>
        СМОТРЕТЬ ТРЕЙЛЕР
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showTrailer: false
    };
  },
  methods: {
    openTrailer() {
      this.showTrailer = true;
      document.body.style.overflowY = 'hidden';
    },
    closeTrailer() {
      this.showTrailer = false;
      document.body.style.overflowY = 'visible';
    }
  }
};
</script>

<style>
.trailer {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 23, 28, .95);
  z-index: 1000;
}

.trailer .content {
  align-items: end;
  height: 100%;
  padding: 25px 0;
}

.banner {
  background-image: url(public/img/banner.jpg);
  height: 100vh;
}

.banner img {
  width: 52rem;
  -webkit-filter: drop-shadow(0 0 .8rem rgba(0, 0, 0, .8));
  filter: drop-shadow(0 0 .8rem rgba(0, 0, 0, .8));
}

.banner p {
  margin: 12px 0;
  color: #f2f2f2;
  text-shadow: 0 0 16px rgba(3,17,18,.4), 0 0 32px rgba(3,17,18,.6);
  font-size: 28px;
  letter-spacing: 3px;
  font-weight: 500;
}

.banner button {
  font-weight: 700;
}
</style>