  <template>
  <div>
    <h2>Новости</h2>
    <div v-if="news.length > 0">
      <div v-for="item in news" :key="item.id">
        <h3>{{ item.title }}</h3>
        <img :src="item.image_url" alt="News Image">
      </div>
    </div>
    <p v-else>{{ message }}</p>
  </div>
</template>
  
<script>
import axios from "axios";
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const news = ref([]);
    const message = ref('');

    async function fetchNews() {
      try {
        const response = await fetch('https://destiny.48ru.ru/api/news');
        const data = await response.json();
        if (response.ok) {
          news.value = data;
        } else {
          message.value = data.error;
        }
      } catch (error) {
        message.value = 'Произошла ошибка при загрузке новостей';
      }
    }

    onMounted(() => {
      fetchNews();
    });

    return {
      news,
      message,
      fetchNews
    };
  }
};
</script>
  
<style scoped>
</style>