<script setup lang="ts">
import SphereIcon from "@/assets/icons/big-sphere.svg";
import SmSphereIcon from "@/assets/icons/sm-sphere.svg";

const user = Telegram.WebApp.initDataUnsafe.user;
const cols = 3;

const levels = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: i === 0 ? "1 Ур." : i === 1 ? "2 Ур." : "",
  active: i === 0,
}));
</script>

<template>
  <div class="w-screen relative text-white text-sm font-light py-10 h-screen bg-black">
    <SmSphereIcon class="absolute z-20 -scale-50 overflow-visible delay-300 -top-[43%] -right-[10%]" />
    <SphereIcon class="absolute overflow-visible -left-[71%] -bottom-[32%] z-20" />

    <h2 class="w-full text-lg font-black text-center">Профиль</h2>

    <img
      :src="user?.photo_url"
      alt=""
      class="rounded-full w-[70px] h-[70px] mx-auto mt-8" />

    <span class="text-lg max-w-fit block mx-auto">{{ user?.first_name ?? user?.username }}</span>
    <span class="font-black max-w-fit block mx-auto">Уровень 1</span>

    <div class="level-map-wrapper mx-auto min-w-fit mt-16 overflow-y-auto max-h-[420px]">
      <div class="level-map">
        <div
          v-for="(level, index) in levels"
          :key="level.id"
          class="node-wrapper"
          :class="{
            'has-right': (index + 1) % cols !== 0,
            'has-top': (index - 5) % 6 === 0 || (index - 6) % 7 === 0 || index === 5,
          }">
          <div
            class="level-node"
            :class="{ active: level.active }">
            {{ level.label }}
          </div>
        </div>
      </div>
    </div>

    <router-link
      to="/upgrades"
      class="mt-4 border border-white mx-auto block max-w-fit relative z-30 rounded-full py-2 px-18 bg-transparent">
      Улучшения
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.level-map-wrapper {
  height: 100vh;
  overflow-y: scroll;

  scrollbar-width: auto; /* "auto", "thin", or "none" */
  scrollbar-color: #d9d9d928 white;

  &::-webkit-scrollbar {
    width: 6px; /* width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #d9d9d928; /* color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background: white; /* color of the scroll thumb */
    border-radius: 50%; /* roundness of the thumb */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
}

.level-map {
  display: grid;
  grid-template-columns: 100px 100px 50px;
  grid-auto-rows: 100px;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.node-wrapper {
  position: relative;

  &.has-right::after {
    content: "";
    position: absolute;
    top: 28%;
    left: 49%;
    width: 70px;
    height: 2px;
    background-color: #888;
    transform: translateY(-50%);
  }

  &.has-top::before {
    content: "";
    position: absolute;
    left: 26%;
    top: -76%;
    width: 2px;
    height: 77px;
    background-color: #888;
    transform: translateX(-50%);
  }
}

.level-node {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative;
  z-index: 1;

  &.active {
    background-color: #4b3f7c;
    color: white;
  }
}
</style>
