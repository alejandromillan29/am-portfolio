<template>
  <ULink class="text-stone-500" :to="link.to">
    <div
      class="flex flex-row items-center gap-2 hover:bg-stone-100 dark:hover:bg-stone-800 px-2 py-1 rounded-lg"
      :class="{ 'bg-stone-100 dark:bg-stone-800 inter-500': link.active }"
    >
      <UIcon
        :name="link.icon!"
        :class="{
          'bg-linear-to-b from-[#e390b9] to-[#718add] text-transparent fill-current':
            link.active,
        }"
      />
      <div
        :class="{
          'am-gradient-text bg-clip-text text-transparent': link.active,
        }"
      >
        {{ link.label }}
      </div>
      <UIcon
        name="i-lucide-external-link"
        class="size-2.5 mt-[-3px] ml-[-3px]"
        v-if="isLinkToExternal(link.to)"
      />
    </div>
  </ULink>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
defineProps<{
  link: NavigationMenuItem;
}>();

const isLinkToExternal = (to: any) => {
  return to[0] !== "/";
};
</script>
