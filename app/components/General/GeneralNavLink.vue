<template>
  <ULink class="text-stone-500" :to="link.to">
    <div
      class="flex flex-row items-center gap-2 hover:bg-stone-100 dark:hover:bg-stone-800 px-2 py-1 rounded-lg"
      :class="link.active ? 'bg-stone-100  dark:bg-stone-800 inter-500' : ''"
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
          link.active ? 'am-gradient-text bg-clip-text text-transparent' : ''
        "
      >
        {{ link.label }}
      </div>
    </div>
  </ULink>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
defineProps<{
  link: NavigationMenuItem;
}>();
</script>
