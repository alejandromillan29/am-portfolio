import Img1 from "@/assets/images/project_osdemo_1.png";
import Img2 from "@/assets/images/project_osdemo_2.png";
import Img3 from "@/assets/images/project_osdemo_3.png";
import type { ProjectData } from "~/types/ProjectData";

export default function osAWSDemoComp() {
  return {
    id: "osawsdemo",
    name: "One Spot (AWS Demo)",
    type: "Personal",
    imgs: [Img1, Img2, Img3],
    descriptionShort:
      "A simplified version of the One Spot app built to strengthen my backend and cloud development skills using AWS services.",
    descriptionLong:
      "One Spot (Demo) is an early prototype inspired by the full One Spot platform. Developed to deepen my understanding of backend architecture and AWS cloud integration, this project focuses on building reliable APIs, managing data securely, and deploying scalable services. It served as a practical sandbox to explore serverless functions, databases, and cloud workflows.",
    techStack: ["Nuxt", "Nuxt UI", "Express", "Amplify", "Lambda", "RDS"],
    url: "https://main.d3r1enjvg5wce3.amplifyapp.com/",
    year: "2025",
  } as ProjectData;
}
