<template>
  <!-- new season -->
  <section class="container">
    <!-- title -->
    <div class="row mb-1">
      <div class="col-12">ТЕКУЩИЙ СЕЗОН</div>
    </div>

    <!-- line -->
    <hr class="vertical" />

    <!-- img -->
    <div class="row">
      <card-all-seasons
      class="height-img"
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season23/S23_Key_Art_-16-9.jpg"
        title="сезон желания"
        description="сезон 23"
      />
    </div>
  </section>

  <!-- old  seasons -->
  <section class="container">
    <!-- title -->
    <div class="row">
      <div class="col-12">old seasons</div>
    </div>

    <!-- line -->
    <hr class="vertical" />

    <!-- img -->
    <div class="row row-cols-md-2 row-cols-1 g-lg-4 g-md-2">
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season22/S22_Key_Art_-16-9.jpg"
        title="сезон желания"
        description="сезон 23"
      />

      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season21/S21_Key_Art_-16-9.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season20/S20_Key_Art_16-9.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season19/season_of_the_seraph_key_art_16x9_web.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season18/season_of_plunder_key_art_16x9_web.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season17/Season_17_Key_Art_4k.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season15/s15_key-art-final.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season14/Season14_season_hub_bg.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season13/Season13_Key_Art.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season12/ArticleBanner_01.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season11/S11_hero_desktop_bg.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season10/hero_desktop_bg.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/season_of_dawn/hero_desktop_bg.jpg"
        title="сезон желания"
        description="сезон 23"
      />
      <card-all-seasons
        image-url="https://www.bungie.net/7/ca/destiny/bgs/seasons/hero_desktop_bg1.jpg"
        title="сезон желания"
        description="сезон 23"
      />
    </div>
  </section>
</template>

<script setup>
import cardAllSeasons from "./card/cardAllSeasons.vue";
</script>
