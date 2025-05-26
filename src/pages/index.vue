<template>
  <div class="subpixel-antialiased bg-base-200">
    <!-- Background -->
    <span class="fixed w-screen h-screen bg-[radial-gradient(#80808040_0.063rem,transparent_0.063rem)] [background-size:1.25rem_1.25rem] opacity-25" />

    <!-- App -->
    <AppHero />
    <LazyAppBlogPosts />
  </div>
</template>

<style scoped>
div {
  font-family: "Fira Mono", monospace;
}

h1 {
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.hero h1 {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
