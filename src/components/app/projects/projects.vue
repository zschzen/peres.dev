<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    id: 1,
    title: "Dura2D",
    description: "A C++ 2D physics engine with dynamic AABB trees and constraint solving.",
    image: "/projects/dura2d.gif",
    alt: "Demonstration of the dynamic AABB trees and constraint solving",
    url: "https://dura2d.glitch.me",
  },
  {
    id: 2,
    title: "LeveGL",
    description: "A simple and easy-to-use graphics programming. Highly inspired by raylib.",
    image: "/projects/levegl.gif",
    alt: "Demo showcasing 3D models, shapes and rendering",
    url: "https://levegl.glitch.me",
  },
  {
    id: 3,
    title: "Shader.One",
    description: "A WebGL1&2 multipass fragment shader editor. Inspired by shadertoy.",
    image: "/projects/shader-one.gif",
    alt: "Interface displaying multipass WebGL fragment shader editing",
    url: "https://shader.one",
  },
  {
    id: 4,
    title: "CameBoy",
    description: "An ultra-simple Game Boy emulator. 'It ain't much, but it's honest work'.",
    image: "/projects/cameboy.jpeg",
    alt: "CameBoy emulator running a test ROM",
    url: "https://github.com/SOHNE/CameBoy",
  },
]);
</script>

<template>
  <div>
    <div class="container mx-auto p-4 max-w-full md:max-w-4xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a
          v-for="card in cards"
          :key="card.id"
          :href="card.url"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-transparent hover:border-secondary rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300 cursor-pointer block"
        >
          <div class="relative h-64">
            <NuxtImg
              :src="card.image"
              :alt="card.alt"
              class="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0 bg-transparent group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black/85">
              <h3 class="font-bold text-xl text-white mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {{ card.title }}
              </h3>
              <p class="text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {{ card.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
