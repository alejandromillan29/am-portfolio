<template>
  <UContainer class="py-10">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="am-header-text mb-3">Skills</div>
        <div class="am-subheader-text mb-6">
          Technologies and tools I leverage to create high-quality web and
          mobile applications.
        </div>
        <div v-for="skill in skills">
          <div class="text-lg am-gradient-text font-semibold mb-3">
            {{ skill.title }}
          </div>
          <div class="grid grid-cols-7 gap-4 mb-6 items-center">
            <div class="col-span-1 relative group" v-for="skl in skill.skill">
              <div
                class="bg-white rounded-full p-2 w-full aspect-square flex flex-row items-center"
              >
                <img :src="skl.img" />
              </div>
              <div
                class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-800 text-white dark:bg-white dark:text-stone-800 text-sm rounded py-1 px-2 whitespace-nowrap z-10"
              >
                {{ skl.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-8">
        <div class="am-header-text mb-3">Professional Experience</div>
        <div class="am-subheader-text mb-6">
          A selection of roles showcasing my growth and contributions in web and
          software development across various industries.
        </div>
        <UTimeline
          :items="items"
          :ui="{
            title: 'am-gradient-text font-semibold',
            description: 'am-text',
            indicator: 'dark:bg-stone-800 dark:text-white',
            separator: 'dark:bg-stone-800',
            date: 'dark:text-white',
          }"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// FRONT
import vue from "@/assets/images/skills_vue.svg";
import nuxt from "@/assets/images/skills_nuxt.svg";
import quasar from "@/assets/images/skills_quasar.svg";
import ionic from "@/assets/images/skills_ionic.svg";
import capacitor from "@/assets/images/skills_capacitor.svg";
import angular from "@/assets/images/skills_angular.svg";
import pwa from "@/assets/images/skills_pwa.png";
import tailwind from "@/assets/images/skills_tailwind.png";

// BACK
import firebase from "@/assets/images/skills_firebase.svg";
import node from "@/assets/images/skills_node.png";
import aws from "@/assets/images/skills_aws.png";
import express from "@/assets/images/skills_express.svg";
import postgresql from "@/assets/images/skills_postgresql.svg";

// TEST
import cypress from "@/assets/images/skills_cypress.webp";
import appium from "@/assets/images/skills_appium.svg";
import github_actions from "@/assets/images/skills_github_actions.svg";
import fastlane from "@/assets/images/skills_fastlane.svg";

const skills = [
  {
    title: "Frontend",
    skill: [
      {
        label: "Vue.js",
        img: vue,
      },
      {
        label: "Nuxt",
        img: nuxt,
      },
      {
        label: "Quasar",
        img: quasar,
      },
      {
        label: "Tailwind",
        img: tailwind,
      },
      {
        label: "Ionic",
        img: ionic,
      },
      {
        label: "Capacitor",
        img: capacitor,
      },
      {
        label: "Progressive Web App",
        img: pwa,
      },
      {
        label: "Angular",
        img: angular,
      },
    ],
  },
  {
    title: "Backend & Cloud",
    skill: [
      {
        label: "Firebase",
        img: firebase,
      },
      {
        label: "Node",
        img: node,
      },
      {
        label: "AWS",
        img: aws,
      },
      {
        label: "Express",
        img: express,
      },
      {
        label: "PostgreSQL",
        img: postgresql,
      },
    ],
  },
  {
    title: "Testing & Deployment",
    skill: [
      {
        label: "Cypress",
        img: cypress,
      },
      {
        label: "Appium",
        img: appium,
      },
      {
        label: "Github Actions",
        img: github_actions,
      },
      {
        label: "Fastlane",
        img: fastlane,
      },
    ],
  },
];

const items = ref([
  {
    date: "2023 - Present",
    title: "LEAD DEVELOPER - ONE SPOT INC.",
    description:
      "Led the end-to-end development of a web and mobile ticketing platform for social and cultural events, reaching 8,000+ registered users and surpassing 15,000 tickets sold in under two years. Built and maintained the platform using Vue.js, Ionic, and Capacitor, implementing core features such as authentication, real-time data updates, push notifications, analytics, and secure API consumption with Firebase services. Integrated credit card payment gateways including NMI and local bank digital wallets to enable secure transactions, and engineered the full-stack solution from frontend architecture and backend infrastructure to deployment on the App Store and Google Play.",
    icon: "i-lucide-code",
  },
  {
    date: "2023 - Present",
    title: "TECHNICAL LEAD - BLUE CORE S.A.",
    description:
      "Led the frontend development of a large-scale web banking platform designed to serve 200,000+ users, successfully delivering 8 end-to-end customer journeys including onboarding, user unlock, and account recovery flows. Integrated third-party services for biometric validation and online session booking such as FacePhi and Microsoft Bookings, while building the application using Angular 19 and consuming RESTful APIs via AWS Lambda and API Gateway. Established frontend standards to improve performance and maintainability, and mentored developers through code reviews and pair programming to ensure a consistently high level of code quality.",
    icon: "i-lucide-users",
  },
  {
    date: "2021 - 2022",
    title: "QA ENGINEER - BLUE CORE S.A.",
    description:
      "Implemented automated end-to-end (E2E) testing using Cypress and Appium to validate critical user flows across web and native iOS and Android builds, and developed CI/CD pipelines with Fastlane and GitHub Actions to automate building, testing, and release processes.",
    icon: "i-lucide-check-circle",
  },
  {
    date: "2020",
    title: "FRONT END DEVELOPER - BATH & BODY WORKS",
    description:
      "Maintained and supported 8 e-commerce websites across multiple Latin American markets, implementing UI updates and new features using VTEX CMS to ensure consistent performance and localized user experiences.",
    icon: "i-lucide-layout",
  },
  {
    date: "2019",
    title: "JUNIOR WEB DEVELOPER - VENMETRO INC.",
    description:
      "Contributed to the development of a fintech web platform serving approximately 1,800 monthly users, maintaining and enhancing frontend components using Vue.js within a Ruby on Rails application while strengthening full-stack development knowledge.",
    icon: "i-lucide-monitor",
  },
]);

useHead({
  title: "Alejandro Millan | Experience",
  meta: [
    {
      name: "description",
      content:
        "A selection of roles showcasing my growth and contributions in web and software development across various industries.",
    },
    { property: "og:title", content: "Alejandro Millan | Experience" },
    {
      property: "og:description",
      content:
        "A selection of roles showcasing my growth and contributions in web and software development across various industries.",
    },
  ],
});
</script>
