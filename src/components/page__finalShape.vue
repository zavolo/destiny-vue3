<template>
  <!-- final-main -->
  <section class="container-fluid position-relative">
    <!-- img -->
    <img
      src="https://www.destinythegame.com/content/dam/destiny/tfs/hero/tfs-bg-hero.jpg"
      class="img-fluid"
    />

    <!-- title -->
    <div class="row">
      <div
        class="col-6 final-main__img-grid position-absolute start-50 bottom-0 translate-middle"
      >
        <div
          class="final-main-wrap__img-grid final-main__grid-markup d-flex mb-5"
        >
          <img
            src="https://www.destinythegame.com/content/dam/destiny/tfs/vertical-logo/tfs-logo-vert-ru.svg"
            class="rounded mx-auto d-block final-main-main__img-name"
          />
        </div>

        <imgFinalMain
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/play-icons/tfs-hero-thumb-gameplay-play.jpg"
          title=" смотреть трейлер игрового процесса"
        />
        <imgFinalMain
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/hero/tfs-hero-thumb-preorder.jpg"
          title=" смотреть трейлер игрового процесса"
        />
      </div>
    </div>
  </section>

  <!-- call-doom -->
  <section class="container-fluid position-relative">
    
    <div class="row position-relative">
      <!-- img -->
      <img
        src="https://www.destinythegame.com/content/dam/destiny/tfs/story/tfs-story-bg.jpg"
        class="img-fluid call-doom__img"
      />
      <!-- title -->
      <titleSection
      subtitle="Сюжет"
        class="position-absolute bottom-0 start-50 translate-middle"
        title="Бросьте вызов погибели"
        description="Приближается Финальная форма – сведение всей реальности к единому и неизменному порядку по кошмарному замыслу Свидетеля. Отправьтесь вместе с «Авангардом» в опасную экспедицию в самое сердце Странника и положите конец войне Света и Тьмы."
      />
    </div>

    <div class="row row-cols-xl-3 row-cols-md-2 row-cols-1 justify-content-center px-5">
      <!-- card -->
        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/story/tfs-story-img1.jpg"
          title="Сюжетная кампания"
          description="Поспешите на помощь союзникам и отправьтесь за Свидетелем в сердце Странника. Разблокируйте новые награды и силу, чтобы дать отпор Финальной форме."
        />

        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/story/tfs-story-img2.jpg"
          title="Легендарный режим"
          description="В вашем лице человечество обрело величайшего защитника. Вы отважно идете к недостижимым целям и не боитесь оттачивать свои навыки в борьбе с неизбежностью."
        />

        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/story/tfs-story-img3.jpg"
          title="Улучшенные награды"
          description="Завершите сюжетную кампанию в легендарном режиме и продолжите приключение с наградами, достойными Стража, которому любое испытание по плечу."
        />
      </div>
  </section>

  <!-- prism -->
  <section class="container-fluid position-relative">
    <!-- img -->
    <img
      src="https://www.destinythegame.com/content/dam/destiny/tfs/subclass/tfs-prismatic-bg.jpg"
      alt=""
      class="img-fluid call-doom__img"
    />

    <div class="row justify-content-center g-4">
      <!-- title -->
      <titleSection
        class="position-absolute bottom-50 start-50 translate-middle"
        title="Призма"
        description="Стражи, в вас прекрасно уживаются и Свет, и Тьма. Сотрите грань между способностями, которыми вы уже овладели, чтобы обрести новую силу в противоположности."
      />

      <div class="col justify-content-center d-flex call-doom__card-gap">
        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/subclass/tfs-prismatic-img1.jpg"
          title="Невероятные конфигурации"
          description="Сила Призмы позволит вам впервые использовать стихии Молнии, Солнца, Пустоты, Стазиса и Нити для создания собственного подкласса."
        />

        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/subclass/tfs-prismatic-img2.jpg"
          title="Экзотические классовые предметы"
          description="Сделайте своего Стража еще уникальнее с помощью брони, способной подарить своему обладателю силу не одного, а сразу двух экзотических предметов."
        />

        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/subclass/tfs-prismatic-img3.jpg"
          title="Трансцендентность"
          description="Вступите в схватку и найдите баланс между таящимися внутри вас силами Света и Тьмы, чтобы открыть новые способности и познать истинную мощь Призмы."
        />
      </div>
    </div>
  </section>

  <!-- pale-heart -->
  <section class="container-fluid position-relative">
    <img
      src="https://www.destinythegame.com/content/dam/destiny/tfs/destination/tfs-destination-bg.jpg"
      alt=""
      class="img-fluid call-doom__img"
    />

    <div class="row justify-content-center g-4">
      <!-- title -->
      <titleSection
        class="position-absolute bottom-50 start-50 translate-middle"
        title="Бледное сердце"
        description="Здесь трещит по швам сама вечность. Здесь нет ничего постоянного, здесь нас преследуют отзвуки нашего прошлого. Здесь вам – если вы не сгинете среди миражей – откроются истоки великой войны."
      />
      <div class="col justify-content-center d-flex call-doom__card-gap">
        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/destination/tfs-destination-vid1.jpg"
        />
        <card__callDoom2
          image-url="	https://www.destinythegame.com/content/dam/destiny/tfs/destination/tfs-destination-img2.jpg"
        />
        <card__callDoom2
          image-url="https://www.destinythegame.com/content/dam/destiny/tfs/destination/tfs-destination-img3.jpg"
        />
      </div>
    </div>
  </section>

  <!-- dread -->
  <section class="container-fluid position-relative">
    <img
      src="https://www.destinythegame.com/content/dam/destiny/tfs/enemies/tfs-enemies-bg.jpg"
      class="img-fluid"
    />

    <div class="row justify-content-center g-4">
      <!-- title -->
      <titleSection
        class="position-absolute bottom-0 start-50 translate-middle"
        title="Мороки"
        description="Приближается Финальная форма – сведение всей реальности к единому и неизменному порядку по кошмарному замыслу Свидетеля. Отправьтесь вместе с «Авангардом» в опасную экспедицию в самое сердце Странника и положите конец войне Света и Тьмы."
      />
    </div>
  </section>

  <!-- portal -->
  <section class="container-fluid">
    <div class="row mb-5">
      <titleSection
        title="Вперед, только вперед"
        description="Смело ступай навстречу неизведанному, Страж."
      />
    </div>

    <div class="row mb-5">
      <div class="col-6">
        <img
          src="https://www.destinythegame.com/content/dam/destiny/tfs/activities/tfs-activities-within.jpg"
          alt=""
          class="img-fluid"
        />
      </div>

      <card__portalTitle
        title="В недрах Странника"
        description="Избавьте некогда безупречную обитель от расползающейся скверны."
      />
    </div>

    <div class="row mb-5">
      <card__portalTitle
        title="Новый рейд"
        description="Внимание всем Стражам! Пришло время бросить вызов Свидетелю."
      />

      <div class="col-6">
        <img
          src="https://www.destinythegame.com/content/dam/destiny/tfs/tfs-activities-raid.jpg"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-6">
        <img
          src="https://www.destinythegame.com/content/dam/destiny/tfs/tfs-activities-key.jpg"
          alt=""
          class="img-fluid"
        />
      </div>

      <card__portalTitle
        title="Ключ от подземелья «Финальной формы»"
        description=" Обладателей годового абонемента ждут новые испытания со сверхмощными наградами. Откройте доступ к двум подземельям, которые выйдут в год «Финальной формы».."
      />
    </div>
  </section>

  <!-- materials -->
  <section class="container">
    <!-- title -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="h2">Снимки экрана</h4>
      </div>
    </div>

    <!-- img -->
    <div class="row row-cols-3 g-4">
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-1.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-2.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-3.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-4.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-5.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/screenshots/tfs-media-shot-6.jpg"
      />
    </div>

    <!-- title -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="h2">СТрейлеры</h4>
      </div>
    </div>

    <!-- img -->
    <div class="row row-cols-3 g-4">
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/destination/tfs-destination-vid1.jpg"
      />
      <imgFinal
        image-url="	https://www.destinythegame.com/content/dam/destiny/tfs/play-icons/tfs-hero-thumb-gameplay-play.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/play-icons/tfs-media-trailer-3-play.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/play-icons/tfs-media-trailer-2-play.jpg"
      />
    </div>

    <!-- title -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="h2">Обои</h4>
      </div>
    </div>

    <!-- img -->
    <div class="row row-cols-3 g-4">
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/wallpapers/tfs-media-wallpaper-1.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/wallpapers/tfs-media-wallpaper-2.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/wallpapers/tfs-media-wallpaper-3.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/wallpapers/tfs-media-wallpaper-4.jpg"
      />
      <imgFinal
        image-url="https://www.destinythegame.com/content/dam/destiny/tfs/media/wallpapers/tfs-media-wallpaper-5.jpg"
      />
    </div>
  </section>

  <!-- banner -->
  <section class="container-fluid">
    <img
      src="https://www.destinythegame.com/content/dam/destiny/tfs/bumper/tfs-coda-bg.jpg"
      alt=""
      class="img-fluid"
    />
  </section>
</template>

<script setup>
import card__callDoom from "./card/card__callDoom.vue";
import card__callDoom2 from "./card/card__callDoom2.vue";
import titleSection from "./title/titleSection.vue";
import imgFinal from "./img/imgFinal.vue";
import imgFinalMain from "./img/imgFinalMain.vue";
import card__portalTitle from "./card/card__portalTitle.vue";
</script>