import Img1 from "@/assets/images/project_passcrate_1.png";
import Img2 from "@/assets/images/project_passcrate_2.png";
import type { ProjectData } from "~/types/ProjectData";

export default function passcrateComp() {
  return {
    id: "passcrate",
    name: "PassCrate",
    type: "Personal",
    imgs: [Img1, Img2],
    descriptionShort:
      "A secure PWA password manager built to explore encryption and data security while providing an easy way to store passwords safely online.",
    descriptionLong:
      "PassCrate is a progressive web app (PWA) password manager created to securely store credentials using encrypted database storage. Born from my curiosity about encryption techniques and a personal need for a reliable password manager, the project emphasizes security, usability, and modern web performance. It showcases my ability to integrate client-side encryption with responsive, installable web app capabilities.",
    techStack: ["Vue", "Quasar", "PWA", "Firebase"],
    url: "https://passcrate.web.app/",
    year: "2021",
  } as ProjectData;
}
