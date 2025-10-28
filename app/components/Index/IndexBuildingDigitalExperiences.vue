<template>
  <UContainer class="py-25">
    <div class="mb-15">
      <div class="text-4xl inter-700 mb-3 text-stone-800 dark:text-white">
        Building Digital Experiences
      </div>
      <div class="dark:text-gray-300 text-stone-600 inter-400">
        I design and develop high-quality applications that are intuitive,
        reliable, and impactful for users and businesses alike.
      </div>
    </div>

    <div class="grid grid-cols-12 gap-5 mb-15 items-center">
      <div
        class="col-span-12 sm:col-span-6 md:col-span-4 p-8 rounded-xl border border-stone-800 dark:border-stone-700 bg-linear-to-b dark:from-stone-900 dark:to-stone-950"
        v-for="item in tiles"
      >
        <div class="flex flex-row items-center gap-3 mb-4">
          <UIcon
            :name="item.icon"
            class="size-8 bg-linear-to-b from-[#e390b9] to-[#718add] text-transparent fill-current"
          />
          <div class="text-2xl inter-700 text-stone-800 dark:text-white">
            {{ item.title }}
          </div>
        </div>
        <div class="mb-3 dark:text-gray-300 text-stone-600 inter-400">
          {{ item.description }}
        </div>
        <ul class="inter-500 list-disc ml-6 text-stone-800 dark:text-white">
          <li v-for="li in item.list">
            {{ li }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row justify-end gap-3">
      <UButton
        label="View My Projects"
        color="neutral"
        icon="i-lucide-layout-dashboard"
        to="/projects"
      />
      <UButton
        label="View My Experience"
        color="neutral"
        icon="i-lucide-user-star"
        to="/experience"
      />
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const tiles = [
  {
    icon: "i-lucide-code",
    title: "Frontend Development",
    description:
      "I build responsive, performant, and maintainable web applications using modern frameworks and component-based architectures.",
    list: [
      "Vue, Quasar, Nuxt & NuxtUI, Angular",
      "TypeScript & Tailwind CSS",
      "Component-driven architecture & maintainable code",
      "Responsive design",
    ],
  },
  {
    icon: "i-lucide-tablet-smartphone",
    title: "Mobile & Hybrid Apps",
    description:
      "I create hybrid mobile apps that work seamlessly across devices, combining speed and native-like experiences.",
    list: [
      "Ionic & Capacitor",
      "Integration with backend services (Firebase, APIs)",
      "App lifecycle & performance optimization",
      "Deployment for Android & iOS",
    ],
  },
  {
    icon: "i-lucide-cloud",
    title: "Cloud & Integration",
    description:
      "I connect apps to cloud services and APIs to ensure scalable, reliable, and data-driven applications.",
    list: [
      "Firebase: authentication, database, storage, analytics",
      "API design & integration",
      "Backend basics: Node.js / Express",
      "Deployment, monitoring, and cloud best practices",
    ],
  },
];
</script>
