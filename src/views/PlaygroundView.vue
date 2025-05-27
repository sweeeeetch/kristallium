<script setup lang="ts">
const user = Telegram.WebApp.initDataUnsafe.user;
</script>

<template>
  <div class="w-screen relative text-white text-sm font-light h-screen bg-black overflow-hidden">
    <div class="w-full h-full"></div>

    <router-link
      to="/profile"
      class="absolute top-3 right-3 flex items-center">
      <div class="flex flex-col items-end">
        <div class="bg-white w-[185px] whitespace-nowrap min-w-fit font-medium text-black rounded-full z-20 px-4 pr-10 py-1.5 flex items-center gap-2 justify-start">
          {{ user?.first_name ?? user?.username }}
          <span class="text-xs font-light">Уровень 1</span>
        </div>
        <div class="mr-6 relative flex w-[120px] -mt-0.5 items-center justify-center border border-white overflow-hidden rounded-full bg-gray-500">
          <div class="rounded-xl bg-white absolute bottom-0 left-0 top-0 w-[30%]"></div>
          <!-- :style="{
            width: `${(store.user.dailyListeningTime / 60 / 120) * 100}%`,
          }" -->
          <span class="relative z-10 text-sm">Опыт</span>
        </div>
      </div>

      <img
        :src="user?.photo_url"
        alt=""
        class="rounded-full -ml-8 z-20 w-[65px] h-[65px]" />
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
