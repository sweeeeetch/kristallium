<script setup lang="ts">
import { ref, onMounted } from "vue";
const isAppLoaded = ref(false);

onMounted(() => {
  Telegram.WebApp.ready();
  Telegram.WebApp.requestFullscreen();

  isAppLoaded.value = true;
});
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <video
      v-if="isAppLoaded"
      src="@/assets/video.mp4"
      muted
      autoplay
      class="h-full w-full object-cover"></video>
  </div>
</template>

<style scoped></style>
