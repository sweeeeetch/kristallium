<script setup lang="ts">
import { ref, onMounted } from "vue";

const isAppLoaded = ref(false);
const video = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  Telegram.WebApp.ready();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Telegram.WebApp.requestFullscreen();
  }

  isAppLoaded.value = true;

  if (video.value) {
    video.value.play();
  }
});
</script>

<template>
  <div class="w-screen h-screen bg-black overflow-hidden">
    <video
      v-if="isAppLoaded"
      ref="video"
      src="@/assets/video.mp4"
      autoplay
      muted
      playsinline
      class="h-screen w-screen"></video>
  </div>
</template>

<style scoped></style>
