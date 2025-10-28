<template>
  <UHeader class="border-b border-stone-200 dark:border-stone-800">
    <template #title>
      <div class="flex flex-row items-center gap-2">
        <UIcon name="i-lucide-terminal" class="size-6" />
        <span class="am-gradient-text bg-clip-text text-transparent"
          >Alejandro Millan</span
        >
      </div>
    </template>
    <div class="flex flex-row gap-2">
      <GeneralNavLink v-for="link in items" :link="link" />
    </div>
    <template #right>
      <UColorModeButton />
    </template>
    <template #toggle>
      <UDrawer
        direction="right"
        title="Menu"
        description="Navigation"
        inset
        :ui="{
          overlay: 'dark:bg-stone-950/75',
          content: 'dark:bg-stone-950',
        }"
        v-model:open="isDrawerOpen"
      >
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          class="sm:hidden"
        />
        <template #body>
          <div class="w-[65vw] flex flex-col gap-4">
            <GeneralNavLink
              v-for="link in items"
              :link="link"
              @click="isDrawerOpen = false"
            />
          </div>
        </template>
      </UDrawer>
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const isDrawerOpen = ref(false);

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
