<template>
  <!-- img -->
  <section class="container-fluid position-relative">
    <img
      src="https://wargm.ru/img/db/ba/1a/ba1af71406c9f115b5a8791d5a417fa4.jpg"
      alt=""
      class="img-fluid"
    />

    <div
      class="row position-absolute top-50 start-0 translate-middle-y p-5 flex-column align-items-center"
    >
      <div class="col mb-3 img__final-shape">
        <img
          src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltc3a273a25afc8de4/64dfe4ee29a06223b8b7f42c/tfs-logo-vert-ru.svg?format=webp"
          alt=""
          class="img-fluid"
          style="height: 8rem"
        />
      </div>
      <div class="col d-flex justify-content-center title-fs">
        СТАНЬТЕ ЛЕГЕНДОЙ
      </div>
    </div>
  </section>

  <hr class="vertical" />

  <!-- favourites -->
  <section class="container-fluid">
    <div class="row">
      <div class="col-7">
        <img
          src="https://www.destinythegame.com/content/dam/destiny/tfs/hero/tfs-bg-hero.jpg"
          alt=""
          class="img-fluid"
          @click="$router.push('/finalShape')"
        />
      </div>
      <div class="col-5">
        <img
          src="https://images.contentstack.io/v3/assets/blte410e3b15535c144/blta6cc024a6a8d1a33/6564c8e252b29b28d95c0551/s23-media-trailer-01.jpg?format=webp"
          alt=""
          class="img-fluid h-100"
          @click="$router.push('/allSeasons')"
        />
      </div>
    </div>
  </section>

  <hr class="vertical" />

  <page__news/>

</template>
        
<script setup>
import page__news from './page__news.vue';
</script>

<style scoped>
.img__final-shape {
  width: 100%;
}
.title-fs {
  font-size: 2rem;
}
</style>