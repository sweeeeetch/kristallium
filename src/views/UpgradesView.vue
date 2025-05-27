<script setup lang="ts">
import SphereIcon from "@/assets/icons/big-sphere.svg";
import SmSphereIcon from "@/assets/icons/sm-sphere.svg";
import UpgradeItem from "@/components/UpgradeItem.vue";

const user = Telegram.WebApp.initDataUnsafe.user;
</script>

<template>
  <div class="w-screen relative text-white text-sm font-light pb-8 pt-16 h-screen bg-black">
    <SmSphereIcon class="absolute z-20 -scale-50 overflow-visible delay-300 -top-[67%] -right-[122%]" />
    <SmSphereIcon class="absolute z-20 -scale-50 overflow-visible delay-300 -top-[43%] -right-[10%]" />
    <SphereIcon class="absolute overflow-visible -left-[71%] -bottom-[32%] z-20" />

    <h2 class="w-full text-lg font-black text-center">Улучшения</h2>

    <img
      :src="user?.photo_url"
      alt=""
      class="rounded-full w-[70px] h-[70px] mx-auto mt-8" />

    <span class="font-black max-w-fit block text-center mx-auto">Доступные улучшения<br />на уровне 1</span>

    <div class="px-8 mx-auto mt-16">
      <UpgradeItem
        label="Корзина"
        :level="3"
        :max="6" />
      <UpgradeItem
        label="Комната"
        :level="0"
        :max="6" />
      <UpgradeItem
        label="Пол"
        :level="0"
        :max="6" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
