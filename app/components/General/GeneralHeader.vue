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
      <ULink v-for="link in items" class="text-stone-500" :to="link.to">
        <div
          class="flex flex-row items-center gap-2 hover:bg-stone-100 dark:hover:bg-stone-800 px-2 py-1 rounded-lg"
          :class="
            link.active ? 'bg-stone-100  dark:bg-stone-800 inter-500' : ''
          "
        >
          <UIcon
            :name="link.icon!"
            :class="
              link.active
                ? 'bg-linear-to-b from-[#e390b9] to-[#718add] text-transparent fill-current'
                : ''
            "
          />
          <div
            :class="
              link.active
                ? 'am-gradient-text bg-clip-text text-transparent'
                : ''
            "
          >
            {{ link.label }}
          </div>
        </div>
      </ULink>
    </div>
    <template #right>
      <UColorModeButton />
    </template>
    <template #toggle>
      <UDrawer direction="right" title="Menu" description="Navigation" inset>
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          class="sm:hidden"
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
