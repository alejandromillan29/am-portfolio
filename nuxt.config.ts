// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-lottie", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "nuxt-color-mode",
  },
  runtimeConfig: {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    sendgridTemplateId: process.env.SENDGRID_TEMPLATE_ID,
    sendgridFromEmail: process.env.SENDGRID_FROM_EMAIL,
    sendgridToEmail: process.env.SENDGRID_TO_EMAIL,
  },
});
