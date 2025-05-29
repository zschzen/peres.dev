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

const BASE_URL = "https://blog.peres.dev";
const FEED_URL = `${BASE_URL}/feed.xml`;

const loading = ref(false);
const error = ref<string | null>(null);
const posts = ref<BlogPost[]>([]);
const visiblePosts = computed(() => posts.value.slice(0, 4));

// Initialize Umami analytics proxy
const { proxy } = useScriptUmamiAnalytics();

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

function openPost(post: BlogPost) {
  const url = post.id.startsWith("http") ? post.id : `${BASE_URL}${post.id}`;

  // Track the blog post click using proxy
  proxy.track("event", {
    name: "blog-post-click",
    postTitle: post.title,
    postUrl: url,
  });

  window.open(url, "_blank");
}

onMounted(fetchPosts);
</script>

<template>
  <div class="container mx-auto p-4 max-w-full md:max-w-4xl">
    <!-- Header -->
    <AppHeader
      title="Latest Blog Posts"
      subtitle="Stay updated with my recent articles"
    />

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
        @click="openPost(post)"
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
