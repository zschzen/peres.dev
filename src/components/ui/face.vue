<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const owoArray: readonly string[] = [
  "(￣ᗜ￣)ノ",
  "(￣ᗜ￣)ノ",
  "(￣ᗜ￣)ノ",
  "(　￣ᗜ)",
  "(　　￣)",
  "(　　　)",
  "(ノ　　)",
  "(￣ノ　)",
  "(ᗜ￣ノ)",
] as const;

const currentOwo = ref<string>(owoArray[0]);
let intervalId: NodeJS.Timeout | null = null;

let currentIndex = 0;

function startAnimation(): void {
  intervalId = setInterval(() => {
    currentOwo.value = owoArray[currentIndex];
    currentIndex = (currentIndex + 1) % owoArray.length;
  }, 139);
}

function stopAnimation(): void {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  stopAnimation();
});
</script>

<template>
  <div
    class="select-none cursor-default"
  >
    <span
      class="inline-block w-16 h-4 text-xs leading-4 tracking-wider"
    >
      {{ currentOwo }}
    </span>
  </div>
</template>

<style scoped>
span {
  font-family: "DotGothic16", sans-serif;
  font-feature-settings: "tnum";
}
</style>
