import type { ProjectData } from "~/types/ProjectData";

export default function osstudioComp() {
  return {
    id: "osstudio",
    name: "One Spot Studio",
    type: "Proprietary",
    imgs: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    descriptionShort:
      "A fast, SEO-optimized website for my creative studio, built with server-side rendering to combine the power of a SPA with top-tier performance.",
    descriptionLong:
      "One Spot Studio is the official website of my own creative studio, developed with server-side rendering (SSR) to deliver strong SEO performance while maintaining the seamless navigation of a single-page app. The project reflects my focus on building high-performing, scalable web experiences that balance design, optimization, and user engagement.",
    techStack: ["Nuxt", "Nuxt UI"],
    url: "https://onespot.studio/",
    year: "2025",
  } as ProjectData;
}
