import type { ProjectData } from "~/types/ProjectData";

export default function osAWSDemoComp() {
  return {
    id: "demfantasy",
    name: "Dem Fantasy",
    type: "Client",
    imgs: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    descriptionShort:
      "A PWA that brings fantasy gaming to local kickball and ultimate frisbee leagues, boosting community engagement and competition.",
    descriptionLong:
      "Dem Fantasy is a progressive web app (PWA) designed to promote participation and interaction in local kickball and ultimate frisbee leagues. It introduces fantasy-style gameplay to community sports, allowing users to draft players, track stats, and compete with friends. This project highlights my ability to blend user engagement, and PWA performance to create dynamic community-driven digital experiences.",
    techStack: ["Vue", "Quasar", "PWA", "Firebase"],
    url: "https://demfantasy.web.app/",
    year: "2021",
  } as ProjectData;
}
