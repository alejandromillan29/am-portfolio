<template>
  <UContainer class="py-10">
    <div class="am-header-text mb-3">Projects</div>
    <div class="am-subheader-text mb-6">
      Here you will find a selection of projects I have worked on.
    </div>
    <div class="grid grid-cols-12 gap-4">
      <ULink
        as="div"
        class="col-span-12 sm:col-span-4 lg:col-span-4 w-full aspect-square bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer border border-stone-300 dark:border-stone-700"
        v-for="project in projects"
        :to="`/projects/${project.id}`"
        :style="{ backgroundImage: `url(${project.imgs[0]})` }"
      >
        <div
          class="group w-full h-full hover:bg-stone-900/80 rounded-lg transition-colors duration-300 flex flex-col items-center justify-end p-5"
        >
          <div
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
          >
            <div class="text-xl inter-700 mb-1 text-white dark:text-white">
              {{ project.name }}
            </div>
            <div class="mb-3 text-white dark:text-white inter-400">
              {{ project.descriptionShort }}
            </div>
            <div class="flex flex-row gap-1">
              <div v-for="tech in project.techStack">
                <UBadge
                  :label="tech"
                  class="bg-linear-to-b from-[#e390b9] to-[#718add] dark:from-[#e390b9] dark:to-[#718add] dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </ULink>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const projects = ProjectsComp();
</script>
