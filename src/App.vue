<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // Telegram.WebApp.ready();
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   Telegram.WebApp.requestFullscreen();
  // }
});
</script>

<template>
  <div class="w-screen relative text-white text-sm font-light h-screen bg-black overflow-hidden">
    <router-view />
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 0.7s ease-out;
}

.fade-enter-from,
.fade-leave-to,
.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from,
.fade-slow-enter-to,
.fade-slow-leave-from {
  opacity: 1;
}

.staggered-fade-enter-active,
.staggered-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.staggered-fade-enter-to,
.staggered-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
