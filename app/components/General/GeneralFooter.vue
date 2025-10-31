<template>
  <UContainer class="py-5 border-t border-stone-200 dark:border-stone-800">
    <div class="grid grid-cols-12 gap-3 mb-4">
      <div class="col-span-12 sm:col-span-5">
        <div class="text-xl inter-700">Alejandro Millan</div>
        <div class="dark:text-gray-300 text-stone-600">
          🇺🇸 United States (Remote - currently based in 🇵🇦 Panama)
        </div>
      </div>
      <div
        class="col-span-12 sm:col-span-7 dark:text-gray-300 text-stone-600 sm:text-right"
      >
        Website Built with Nuxt.js, Typescript and Tailwind CSS
      </div>
    </div>
    <div class="grid grid-cols-12 items-center gap-3">
      <div
        class="col-span-9 sm:col-span-4 dark:text-white text-stone-800 text-xs sm:text-sm"
      >
        &copy; 2025 Alejandro. All rights are reserved.
      </div>
      <div class="col-span-3 sm:col-span-8">
        <div class="flex flex-row gap-3 justify-end">
          <UButton
            to="https://www.linkedin.com/in/amilland/"
            target="_blank"
            leading-icon="i-lucide-linkedin"
            variant="ghost"
            color="neutral"
            trailing-icon="i-lucide-external-link"
            :ui="{
              trailingIcon: 'size-2.5 mt-[-10px]',
            }"
          />
          <UButton
            to="https://github.com/KidDarknezz"
            target="_blank"
            leading-icon="i-lucide-github"
            variant="ghost"
            color="neutral"
            trailing-icon="i-lucide-external-link"
            :ui="{
              trailingIcon: 'size-2.5 mt-[-10px]',
            }"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
