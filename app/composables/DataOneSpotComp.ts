import Img1 from "@/assets/images/project_os_1.png";
import Img2 from "@/assets/images/project_os_2.png";
import Img3 from "@/assets/images/project_os_3.png";
import type { ProjectData } from "~/types/ProjectData";

export default function onespotComp() {
  return {
    id: "onespot",
    name: "One Spot",
    type: "Proprietary",
    imgs: [Img1, Img2, Img3],
    descriptionShort:
      "A cross-platform app to create, discover, and manage events with built-in ticket sales.",
    descriptionLong:
      "One Spot is a web, iOS, and Android app that simplifies event creation and ticketing. It lets users host and promote events, sell tickets securely, and connect with attendees — all from one platform.",
    techStack: ["Ionic", "Capacitor", "Vue", "Firebase"],
    url: "https://onespotlive.com/",
    year: "2021",
  } as ProjectData;
}
