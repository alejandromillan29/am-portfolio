import type { ProjectData } from "~/types/ProjectData";

export default function osAWSDemoComp() {
  return {
    id: "osawsdemo",
    name: "One Spot (AWS Demo)",
    type: "Personal",
    imgs: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    descriptionShort:
      "A simplified version of the One Spot app built to strengthen my backend and cloud development skills using AWS services.",
    descriptionLong:
      "One Spot (Demo) is an early prototype inspired by the full One Spot platform. Developed to deepen my understanding of backend architecture and AWS cloud integration, this project focuses on building reliable APIs, managing data securely, and deploying scalable services. It served as a practical sandbox to explore serverless functions, databases, and cloud workflows.",
    techStack: ["Nuxt", "Nuxt UI", "Express", "Amplify", "Lambda", "RDS"],
    url: "https://main.d3r1enjvg5wce3.amplifyapp.com/",
    year: "2025",
  } as ProjectData;
}
