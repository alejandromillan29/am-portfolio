<template>
  <UContainer class="py-15">
    <div
      class="grid grid-cols-12 items-center gap-5 p-10 rounded-xl bg-linear-to-b from-[#ecbfda] to-[#afc1ec] dark:from-[#7d5769] dark:to-[#384974]"
    >
      <div class="col-span-12 sm:col-span-7">
        <div
          class="inter-700 text-3xl 2xl:text-5xl dark:text-white text-stone-800 mb-2"
        >
          Ready to Bring Your Team's Vision to Life
        </div>
        <div class="text:lg 2xl:text-xl dark:text-white text-stone-800">
          Looking for a frontend developer who blends creativity with
          functionality? I'd love to hear about your next project or role.
        </div>
      </div>
      <div
        class="col-span-12 sm:col-span-5 bg-white dark:bg-stone-950 p-5 rounded-xl"
      >
        <UFormField label="Name">
          <input
            type="text"
            placeholder="John Doe"
            class="w-full p-3 mb-4 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-stone-500 dark:border-stone-500 dark:hover:border-white dark:focus:outline-white"
            v-model="form.fullName"
          />
        </UFormField>
        <UFormField label="Email">
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            class="w-full p-3 mb-4 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-stone-500 dark:border-stone-500 dark:hover:border-white dark:focus:outline-white"
            v-model="form.email"
          />
        </UFormField>
        <UFormField label="Message">
          <textarea
            placeholder="Your message here..."
            rows="5"
            class="w-full p-3 mb-4 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-stone-500 dark:border-stone-500 dark:hover:border-white dark:focus:outline-white"
            v-model="form.message"
          />
        </UFormField>
        <div class="flex flex-row justify-end">
          <UButton
            label="Send"
            color="neutral"
            icon="i-lucide-send-horizontal"
            :style="{ cursor: disableSendBtn ? 'not-allowed' : '' }"
            :disabled="disableSendBtn"
            :loading="loading"
            @click="submitForm()"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const toast = useToast();

const form = ref({
  fullName: "",
  message: "",
  email: "",
});
const loading = ref(false);

const cleanForm = () => {
  form.value.fullName = "";
  form.value.message = "";
  form.value.email = "";
};

const submitForm = async () => {
  try {
    loading.value = true;
    const payload = { ...form.value };
    const { data, error } = await useFetch("/api/mail", {
      method: "POST",
      body: payload,
    });
    console.log("✅ Email sent:", data.value);
    if (error.value) throw error.value;
    toast.add({
      title: "Success",
      description: "The form has been submitted.",
      color: "success",
    });
    cleanForm();
  } catch {
    toast.add({
      title: "Error",
      description: "An error ocurred.",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
};

const disableSendBtn = computed(() => {
  if (
    !form.value.fullName.trim() ||
    !form.value.email.trim() ||
    !form.value.message.trim() ||
    loading.value
  )
    return true;
  return false;
});
</script>
