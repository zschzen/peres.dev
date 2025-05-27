<template>
  <div class="subpixel-antialiased bg-base-200">
    <!-- Background -->
    <span class="fixed w-screen h-screen bg-[radial-gradient(#80808040_0.063rem,transparent_0.063rem)] [background-size:1.25rem_1.25rem] opacity-25" />

    <!-- App -->
    <AppHero />
    <LazyAppBlogPosts />
  </div>
</template>

<style scoped lang="css">
div {
  font-family: "Fira Mono", monospace;
}
</style>
