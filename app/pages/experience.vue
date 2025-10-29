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
      "As Lead Developer at One Spot and One Spot Studio, I lead the end-to-end development of modern, high-performance web and mobile applications. I design and implement scalable solutions using Vue, Quasar, Nuxt, NuxtUI, Firebase, AWS, and Tailwind, focusing on clean architecture, performance, and user experience. At One Spot, I built a cross-platform event management platform from the ground up, while at One Spot Studio, I create tailored digital products for clients — blending technical precision, creative design, and SEO optimization to deliver results that stand out.",
    icon: "i-lucide-code",
  },
  {
    date: "2023 - Present",
    title: "TECHNICAL LEAD - BLUE CORE S.A.",
    description:
      "As a Technical Lead, I guide frontend development teams for two of Panama's largest banks. I led the creation of new mobile banking features for one bank and currently oversee the development of a new online web banking platform for another — both built with Angular. My focus is on frontend architecture, scalable code practices, and delivering seamless user experiences, while mentoring the team and ensuring high-quality, maintainable interfaces.",
    icon: "i-lucide-users",
  },
  {
    date: "2021 - 2022",
    title: "QA ENGINEER - BLUE CORE S.A.",
    description:
      "Developing automated testing for baking mobile application using web technologies as Cypress.io and native technologies as Appium. Implementing CI/CD process for building and deploying mobile apps with Github Actions and Fastlane.",
    icon: "i-lucide-check-circle",
  },
  {
    date: "2020",
    title: "FRONT END DEVELOPER - BATH & BODY WORKS",
    description:
      "Ecommerce front end developer in multi-national brand, handling up to 8 different websites from all around Latin America.",
    icon: "i-lucide-layout",
  },
  {
    date: "2019",
    title: "JUNIOR WEB DEVELOPER - VENMETRO INC.",
    description:
      "Junior web developer in fintech business, working with Ruby on Rails, HTML, CSS and Javascript.",
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
