<template>
  <UContainer class="py-15">
    <div
      class="grid grid-cols-12 items-center gap-5 p-10 rounded-xl bg-linear-to-b from-[#ecbfda] to-[#afc1ec] dark:from-[#7d5769] dark:to-[#384974]"
    >
      <div class="col-span-12 sm:col-span-7">
        <div
          class="inter-700 text-3xl 2xl:text-5xl dark:text-white text-stone-800 mb-2"
        >
          Bringing your ideas to life. Let's turn your vision into reality
        </div>
        <div class="text:lg 2xl:text-xl dark:text-white text-stone-800">
          Have a project in mind or just want to chat? Let's connect!
        </div>
      </div>
      <div
        class="col-span-12 sm:col-span-5 bg-white dark:bg-stone-950 p-5 rounded-xl"
      >
        <UFormField label="Name">
          <input
            type="text"
            placeholder="John Doe"
            class="w-full p-3 mb-4 rounded-lg border border-stone-500 hover:border-white focus:outline-white"
          />
        </UFormField>
        <UFormField label="Email">
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            class="w-full p-3 mb-4 rounded-lg border border-stone-500 hover:border-white focus:outline-white"
          />
        </UFormField>
        <UFormField label="Message">
          <textarea
            placeholder="Your message here..."
            rows="5"
            class="w-full p-3 mb-4 rounded-lg border border-stone-500 hover:border-white focus:outline-white"
          />
        </UFormField>
        <div class="flex flex-row justify-end">
          <UButton
            label="Send"
            color="neutral"
            icon="i-lucide-send-horizontal"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
