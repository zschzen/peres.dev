<script setup lang="ts">
export type HeaderProps = {
  title: string;
  subtitle?: string;
  showUnderline?: boolean;
  underlineWidth?: "small" | "medium" | "large" | "full";
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
};

const props = withDefaults(defineProps<HeaderProps>(), {
  subtitle: "",
  showUnderline: true,
  underlineWidth: "medium",
  titleTag: "h2",
  size: "lg",
  align: "center",
});

// Computed classes for better performance and readability
const underlineWidthClass = computed(() => {
  const widthMap = {
    small: "w-1/4",
    medium: "w-1/3",
    large: "w-1/2",
    full: "w-2/3",
  };
  return widthMap[props.underlineWidth];
});

const titleSizeClass = computed(() => {
  const sizeMap = {
    sm: "text-xl lg:text-2xl",
    md: "text-2xl lg:text-3xl",
    lg: "text-3xl lg:text-4xl",
    xl: "text-4xl lg:text-5xl",
  };
  return sizeMap[props.size];
});

const subtitleSizeClass = computed(() => {
  const sizeMap = {
    sm: "text-sm lg:text-base",
    md: "text-base lg:text-lg",
    lg: "text-base lg:text-lg",
    xl: "text-lg lg:text-xl",
  };
  return sizeMap[props.size];
});

const alignmentClass = computed(() => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return alignMap[props.align];
});

const underlinePositionClass = computed(() => {
  const positionMap = {
    left: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    right: "right-0",
  };
  return positionMap[props.align];
});
</script>

<template>
  <header
    class="mb-6 py-4"
    :class="alignmentClass"
  >
    <div class="space-y-3">
      <component
        :is="titleTag"
        class="font-bold tracking-wider relative"
        :class="[titleSizeClass, { 'mb-3': showUnderline }]"
      >
        {{ title }}
        <div
          v-if="showUnderline"
          class="absolute -bottom-2 h-0.5 bg-accent transition-all duration-300"
          :class="[underlineWidthClass, underlinePositionClass]"
        />
      </component>

      <p
        v-if="subtitle"
        class="text-muted-foreground font-medium tracking-wide"
        :class="subtitleSizeClass"
      >
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>
