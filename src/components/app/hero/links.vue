<script setup lang="ts">
import menuData from "~/assets/data/hero-links.json";

// Type definition for menu items
type MenuItem = {
  name: string;
  url: string;
  icon: string;
  tooltip?: string;
  important?: boolean;
};

// Component props with default values
type Props = {
  items?: MenuItem[];
};

// Optional: Add meta for better SEO and component documentation
defineOptions({
  name: "HorizontalMenu",
});

const props = withDefaults(defineProps<Props>(), {
  items: () => menuData.menuItems,
});

// Computed property for menu items with proper typing
const menuItems = computed<MenuItem[]>(() => props.items);

// Initialize Umami analytics proxy
const { proxy } = useScriptUmamiAnalytics();

// Handle link click with tracking
function handleLinkClick(item: MenuItem) {
  // Track the event using proxy
  proxy.track("event", {
    name: "menu-link-click",
    linkName: item.name,
  });
}
</script>

<template>
  <nav
    class="menu menu-horizontal"
    role="navigation"
    aria-label="Main menu"
  >
    <!-- Items -->
    <ul class="flex gap-1">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="{ indicator: item.important }"
      >
        <a
          class="group tooltip flex items-center justify-center p-2 hover:bg-base-300 transition-colors duration-200 ease-in-out"
          :href="item.url"
          :data-tip="item.tooltip ?? item.name"
          :aria-label="item.name"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleLinkClick(item)"
        >
          <template v-if="item.important">
            <span class="indicator-item status status-error animate-ping" />
            <span class="indicator-item status status-error scale-75" />
          </template>

          <Icon
            :name="item.icon"
            aria-hidden="true"
            size="1.75rem"
            class="grayscale-25 group-hover:grayscale-0 transition-color duration-300 ease-in-out"
          />
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
