import Img1 from "@/assets/images/project_wrwlf_1.png";
import Img2 from "@/assets/images/project_wrwlf_2.png";
import type { ProjectData } from "~/types/ProjectData";

export default function mygradesComp() {
  return {
    id: "wrwlf",
    name: "Wrwlf",
    type: "Personal",
    imgs: [Img1, Img2],
    descriptionShort:
      "A real-time web app inspired by the Werewolf board game, built to explore live database updates and game state handling.",
    descriptionLong:
      "Wrwlf is a personal project designed as a digital companion and alternative to the Werewolf board game. Developed to experiment with real-time databases and synchronized state management, it allows players to join, interact, and experience the game dynamically through the web. This project served as a deep dive into live data handling, event-driven logic, and multiplayer interactions.",
    techStack: ["Vue", "Bulma", "Firebase"],
    url: "https://wrwlf-app.web.app/",
    year: "2023",
    repo: "https://github.com/alejandromillan29/wrwlf",
  } as ProjectData;
}
