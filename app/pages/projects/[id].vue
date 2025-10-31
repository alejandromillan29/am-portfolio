<template>
  <UContainer class="py-10" v-if="project">
    <div class="grid grid-cols-12 gap-7">
      <div
        class="col-span-12 lg:col-span-7 dark:bg-stone-900 bg-stone-100 py-10 rounded-lg"
      >
        <div class="flex flex-row items-center w-full h-full">
          <UCarousel
            v-slot="{ item }"
            arrows
            dots
            :items="project?.imgs"
            class="w-[80%] mx-auto"
            :ui="{
              prev: 'dark:bg-stone-950 dark:hover:bg-stone-900 dark:disabled:bg-stone-950/75 dark:ring dark:ring-stone-700 dark:active:bg-stone-800 text-stone-800 dark:text-white ring-stone-300',
              next: 'dark:bg-stone-950 dark:hover:bg-stone-900 dark:disabled:bg-stone-950/75 dark:ring dark:ring-stone-700 dark:active:bg-stone-800 text-stone-800 dark:text-white ring-stone-300',
              dot: 'bg-stone-300 data-[state=active]:bg-stone-800 dark:bg-stone-700 data-[state=active]:dark:bg-stone-200',
            }"
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
        <div class="mb-4 text-sm flex flex-row gap-3 font-semibold am-text">
          <div>
            <span class="am-gradient-text">Developed:</span>
            {{ project?.year }}
          </div>
          <div>|</div>
          <div>
            <span class="am-gradient-text">Scope:</span>
            {{ project?.type }}
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <UButton
            color="neutral"
            label="Visit Project"
            leading-icon="i-lucide-globe"
            variant="ghost"
            class="dark:hover:bg-stone-600 dark:active:bg-stone-700"
            :to="project?.url"
            target="_blank"
            trailing-icon="i-lucide-external-link"
            :ui="{
              trailingIcon: 'size-2.5 mt-[-10px]',
            }"
          />
          <UButton
            color="neutral"
            label="Visit Repo"
            leading-icon="i-lucide-github"
            variant="ghost"
            class="dark:hover:bg-stone-600 dark:active:bg-stone-700"
            :to="project?.repo"
            target="_blank"
            trailing-icon="i-lucide-external-link"
            :ui="{
              trailingIcon: 'size-2.5 mt-[-10px]',
            }"
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

const findProj = projects.find((proj) => proj.id === route.params.id);
if (findProj) {
  project.value = findProj;
  useHead({
    title: `Alejandro Millan | ${findProj.name}`,
    meta: [
      {
        name: "description",
        content: findProj.descriptionShort,
      },
      { property: "og:title", content: `Alejandro Millan | ${findProj.name}` },
      {
        property: "og:description",
        content: findProj.descriptionShort,
      },
    ],
  });
}
</script>
