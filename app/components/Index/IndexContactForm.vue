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
            v-model="name"
          />
        </UFormField>
        <UFormField label="Email">
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            class="w-full p-3 mb-4 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-stone-500 dark:border-stone-500 dark:hover:border-white dark:focus:outline-white"
            v-model="email"
          />
        </UFormField>
        <UFormField label="Message">
          <textarea
            placeholder="Your message here..."
            rows="5"
            class="w-full p-3 mb-4 rounded-lg border border-stone-300 hover:border-stone-400 focus:outline-stone-500 dark:border-stone-500 dark:hover:border-white dark:focus:outline-white"
            v-model="message"
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

const name = ref("");
const email = ref("");
const message = ref("");
const loading = ref(false);

const cleanForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
};

const submitForm = async () => {
  try {
    loading.value = true;
    const sendEmailReq = await fetch(
      "https://us-central1-onespot-live.cloudfunctions.net/contactEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template: "d-a2d3155c689746aea3956f9ff85fb087",
          email: "amilland29@gmail.com",
          data: {
            fullName: name.value,
            company: "",
            email: email.value,
            service: message.value,
            phone: "",
          },
        }),
      }
    );
    const respData = await sendEmailReq.json();
    if (respData.response === "ok") {
      toast.add({
        title: "Success",
        description: "The form has been submitted.",
        color: "success",
      });
      cleanForm();
    } else throw new Error();
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
    !name.value.trim() ||
    !email.value.trim() ||
    !message.value.trim() ||
    loading.value
  )
    return true;
  return false;
});
</script>
