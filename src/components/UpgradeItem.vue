<script setup lang="ts">
defineProps<{
  label: string;
  level: number;
  max: number;
}>();

const emit = defineEmits<{
  (e: "upgrade"): void;
}>();
</script>

<template>
  <div class="upgrade-item">
    <div class="label">{{ label }}</div>

    <div class="flex flex-col items-center gap-4">
      <button
        class="mt-6 border border-white mx-auto block max-w-fit relative z-30 rounded-full py-2 px-18 bg-transparent"
        @click="emit('upgrade')">
        Улучшить
      </button>

      <div class="dots">
        <div
          v-for="i in max"
          :key="i"
          class="dot"
          :class="{
            filled: i <= level,
            current: i === level + 1,
          }" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.upgrade-item {
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  color: white;

  .label {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
  }

  .upgrade-btn {
    border: 1px solid white;
    padding: 10px 24px;
    border-radius: 999px;
    background: transparent;
    color: white;
    font-size: 16px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .dots {
    display: flex;
    gap: 10px;

    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #888;

      &.filled {
        background: #a084f3;
      }

      &.current {
        box-shadow: 0 0 8px 4px #a084f377;
      }
    }
  }
}
</style>
