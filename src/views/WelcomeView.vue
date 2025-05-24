<script setup lang="ts">
import SphereIcon from "@/assets/icons/big-sphere.svg";
import SmSphereIcon from "@/assets/icons/sm-sphere.svg";
import { onMounted, ref } from "vue";

const spheres = ref<any[]>([]);
const basketballVisible = ref(false);
const isH1Visible = ref(false);
const isPVisible = ref(false);
const isButtonVisible = ref(false);

onMounted(() => {
  setTimeout(function () {
    spheres.value.push({
      id: 1,
      top: -85,
      right: -122,
    });
  }, 250);
  setTimeout(function () {
    spheres.value.push({
      id: 2,
      top: -57,
      right: -10,
    });
  }, 500);
  setTimeout(function () {
    basketballVisible.value = true;
  }, 1200);
  setTimeout(function () {
    isH1Visible.value = true;
  }, 1700);
  setTimeout(function () {
    isPVisible.value = true;
  }, 1900);
  setTimeout(function () {
    isButtonVisible.value = true;
  }, 2150);
});
</script>

<template>
  <transition-group name="staggered-fade">
    <SmSphereIcon
      v-for="(item, index) in spheres"
      :key="item.id"
      class="absolute -scale-50 overflow-visible"
      :style="`top: ${item.top}%; right: ${item.right}%; transition-delay: ${index * 0.3}s`" />
  </transition-group>
  <transition name="fade-slow">
    <img
      v-if="basketballVisible"
      src="@/assets/img/basketball.png"
      alt=""
      class="absolute top-1/2 left-[50%] w-[80%] -translate-y-1/2 -translate-x-1/2 z-20" />
  </transition>
  <transition name="staggered-fade">
    <h1
      v-if="isH1Visible"
      class="font-bold text-base absolute top-[23%] left-[51%] -translate-y-1/2 -translate-x-1/2 z-20">
      Успешный вход
    </h1>
  </transition>
  <transition name="staggered-fade">
    <p
      v-if="isPVisible"
      class="text-sm absolute top-[47%] whitespace-nowrap left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
      Попадай в кольцо и собирай баллы!
    </p>
  </transition>
  <transition name="staggered-fade">
    <router-link
      v-if="isButtonVisible"
      to="/play"
      class="absolute top-[53%] left-1/2 -translate-y-1/2 -translate-x-1/2 border border-white mx-auto block max-w-fit mt-8 rounded-full py-2 px-18 bg-transparent">
      Играть
    </router-link>
  </transition>
  <SphereIcon class="absolute overflow-visible -left-[71%] -bottom-[35%] z-20" />
</template>

<style scoped lang="scss"></style>
