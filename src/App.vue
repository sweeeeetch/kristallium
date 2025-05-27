<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tg = Telegram.WebApp;

tg.BackButton.onClick(() => {
  router.back();
});

onMounted(() => {
  console.log(navigator.userAgent);
  if (!Telegram.WebApp.initData) return;

  Telegram.WebApp.ready();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Telegram.WebApp.requestFullscreen();
  }
});
</script>

<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition
        :name="($route.meta.transition as string)"
        mode="out-in">
        <component
          :is="Component"
          :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-out, opacity 0.25s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(65%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

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
