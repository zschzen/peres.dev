<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

type BlogPost = {
  id: string;
  title: string;
  published: string;
  author: string;
  categories: string[];
  summary: string;
};

const BASE_URL = "https://zschzen.github.io/";
const FEED_URL = `${BASE_URL}/feed.xml`;

const loading = ref(false);
const error = ref<string | null>(null);
const posts = ref<BlogPost[]>([]);

const visiblePosts = computed(() => posts.value.slice(0, 4));

async function fetchPosts() {
  loading.value = true;
  error.value = null;
  try {
    const res = await fetch(FEED_URL, { headers: { Accept: "application/xml" } });
    if (!res.ok)
      throw new Error(res.statusText);
    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    const entries = Array.from(doc.querySelectorAll("entry"));
    posts.value = entries.map((entry) => {
      const path = entry.querySelector("id")?.textContent?.trim() || "/";
      return {
        id: path,
        title: entry.querySelector("title")?.textContent || "",
        published: entry.querySelector("published")?.textContent || "",
        author: entry.querySelector("author > name")?.textContent || "",
        categories: Array.from(entry.querySelectorAll("category")).map(cat => cat.getAttribute("term") || ""),
        summary: entry.querySelector("summary")?.textContent || "",
      };
    }).sort((a, b) => +new Date(b.published) - +new Date(a.published));
  }
  catch (e: any) {
    error.value = e.message || "Failed to load posts";
  }
  finally {
    loading.value = false;
  }
}

function openPost(path: string) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  window.open(url, "_blank");
}

onMounted(fetchPosts);
</script>

<template>
  <div class="container mx-auto p-4 max-w-full md:max-w-4xl">
    <!-- Header -->
    <header class="text-center mb-12 py-6">
      <div class="space-y-4">
        <h1 class="text-3xl lg:text-4xl font-bold mb-3 tracking-wider relative">
          Latest Blog Posts
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-accent" />
        </h1>
        <p class="text-gray-500 text-base lg:text-lg font-medium tracking-wide">
          Stay updated with my recent articles
        </p>
      </div>
    </header>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-10">
      <span class="loading loading-spinner loading-lg" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-error">
      <p>{{ error }}</p>
      <button class="btn btn-sm btn-outline mt-2" @click="fetchPosts">
        Retry
      </button>
    </div>

    <!-- Posts Grid -->
    <div v-else-if="visiblePosts.length" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <article
        v-for="post in visiblePosts"
        :key="post.id"
        class="card bg-base-100 border border-gray-200 cursor-pointer transform transition hover:shadow-2xl hover:-translate-y-1"
        @click="openPost(post.id)"
      >
        <div class="card-body p-4">
          <h2 class="card-title text-lg line-clamp-2">
            {{ post.title }}
          </h2>
          <p class="text-sm text-gray-600 line-clamp-3 mt-2">
            {{ post.summary }}
          </p>
          <div v-if="post.categories.length" class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="cat in post.categories"
              :key="cat"
              class="badge badge-soft badge-secondary badge-sm"
            >
              {{ cat }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-10">
      <p class="text-lg">
        No posts available.
      </p>
      <button class="btn btn-primary mt-4" @click="fetchPosts">
        Refresh
      </button>
    </div>
  </div>
</template>
