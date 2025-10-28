<template>
  <UContainer class="py-10">
    <div class="grid grid-cols-12 gap-7">
      <div
        class="col-span-12 lg:col-span-7 dark:bg-stone-900 bg-stone-200 py-10 rounded-lg"
      >
        <div class="flex flex-row items-center w-full h-full">
          <UCarousel
            v-slot="{ item }"
            arrows
            dots
            :items="project?.imgs"
            class="w-[80%] mx-auto"
          >
            <img :src="item" class="w-full rounded-lg" />
          </UCarousel>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="am-header-text am-gradient-text mb-3">
          {{ project?.name }}
        </div>
        <div class="am-subheader-text mb-4">
          {{ project?.descriptionShort }}
        </div>
        <div class="am-separator mb-8" />
        <div class="am-header-text mb-3">What Is it?</div>
        <div class="am-subheader-text mb-4">{{ project?.descriptionLong }}</div>
        <div class="am-separator mb-8" />
        <div class="am-header-text mb-3">Tools & Technologies</div>
        <div class="flex flex-row gap-3 mb-4">
          <UBadge
            v-for="tech in project?.techStack"
            :label="tech"
            color="neutral"
          />
        </div>
        <div class="am-separator mb-8" />
        <div class="flex flex-row gap-4">
          <UButton
            color="neutral"
            label="Visit Project"
            icon="i-lucide-globe"
            variant="ghost"
            class="dark:hover:bg-stone-600 dark:active:bg-stone-700"
            :to="project?.url"
            target="_blank"
          />
          <UButton
            color="neutral"
            label="Visit Repo"
            icon="i-lucide-github"
            variant="ghost"
            class="dark:hover:bg-stone-600 dark:active:bg-stone-700"
            :to="project?.repo"
            target="_blank"
            v-if="project?.repo"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { type ProjectData } from "~/types/ProjectData";

const project = ref<ProjectData>();

const projects = ProjectsComp();
const route = useRoute();

onMounted(() => {
  const findProj = projects.find((proj) => proj.id === route.params.id);
  if (findProj) project.value = findProj;
});
</script>
