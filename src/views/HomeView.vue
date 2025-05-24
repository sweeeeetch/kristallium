<script setup lang="ts">
import { ref, onMounted } from "vue";
import SphereIcon from "@/assets/icons/big-sphere.svg";

const isAppLoaded = ref(false);
const video = ref<HTMLVideoElement | null>(null);
const isSphereVisible = ref(false);
const items = ref<any[]>([]);

const togglePlay = () => {
  if (video.value) {
    video.value.play();
  }

  setTimeout(function () {
    isSphereVisible.value = true;

    setTimeout(function () {
      items.value.push({
        id: 1,
        title: "Cпасибо что выбрали нас!<br>Войдите в профиль и заберите подарок",
        button: false,
      });
    }, 250);
    setTimeout(function () {
      items.value.push({
        id: 2,
        title: "Начать",
        button: true,
      });
    }, 500);
  }, 2100);
};

onMounted(() => {
  isAppLoaded.value = true;

  togglePlay();
});
</script>

<template>
  <!-- <div class="w-screen relative text-white text-sm font-light h-screen bg-black overflow-hidden"> -->
  <video
    v-if="isAppLoaded"
    ref="video"
    src="@/assets/video.mp4"
    autoplay
    muted
    playsinline
    class="h-screen w-screen absolute z-10"
    @loadedmetadata="togglePlay"></video>

  <transition name="fade">
    <SphereIcon
      v-if="isSphereVisible"
      class="absolute -left-[75%] -bottom-[32%] z-20" />
  </transition>

  <transition-group
    name="staggered-fade"
    tag="div"
    class="relative z-30 mt-[125%]">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :style="`transition-delay: ${index * 0.3}s`">
      <router-link
        v-if="item.button"
        to="/welcome"
        class="border border-white mx-auto block max-w-fit mt-8 rounded-full py-2 px-18 bg-transparent">
        {{ item.title }}
      </router-link>
      <p
        v-else
        v-html="item.title"
        class="text-center w-full"></p>
    </div>
  </transition-group>
  <!-- </div> -->
</template>

<style scoped lang="scss"></style>
