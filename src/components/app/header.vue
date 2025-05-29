<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  showUnderline: {
    type: Boolean,
    default: true,
  },
  underlineWidth: {
    type: String,
    default: "medium",
    validator: value => ["small", "medium", "large", "full"].includes(value),
  },
});

const underlineWidthClass = computed(() => {
  const widthMap = {
    small: "w-1/4",
    medium: "w-1/3",
    large: "w-1/2",
    full: "w-2/3",
  };
  return widthMap[props.underlineWidth];
});
</script>

<template>
  <header class="text-center mb-2 py-6">
    <div class="space-y-4">
      <h1 class="text-3xl lg:text-4xl font-bold mb-3 tracking-wider relative">
        {{ title }}
        <div
          v-if="showUnderline"
          class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent"
          :class="underlineWidthClass"
        />
      </h1>
      <p
        v-if="subtitle"
        class="text-gray-500 text-base lg:text-lg font-medium tracking-wide"
      >
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>
