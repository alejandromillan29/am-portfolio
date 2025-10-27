<template>
  <UHeader class="border-b border-stone-200 dark:border-stone-800">
    <template #title>
      <span class="gradient-text bg-clip-text text-transparent"
        >Alejandro Millan</span
      >
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
    <template #toggle>
      <UDrawer direction="right" title="Menu" description="Navigation" inset>
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          class="block lg:hidden"
        />
        <template #body>
          <div class="w-[60vw]">asdf</div>
        </template>
      </UDrawer>
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    icon: "i-lucide-home",
    active: route.fullPath === "/",
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "i-lucide-layout-dashboard",
    active: route.fullPath === "/projects",
  },
  {
    label: "Experience",
    to: "/experience",
    icon: "i-lucide-user-star",
    active: route.fullPath === "/experience",
  },
  {
    label: "Contact",
    icon: "i-lucide-mail",
    to: "mailto:amilland29@gmail.com",
    target: "_blank",
  },
]);
</script>
