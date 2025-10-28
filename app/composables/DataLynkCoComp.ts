import Img1 from "@/assets/images/project_lynkco_1.png";
import Img2 from "@/assets/images/project_lynkco_2.png";
import Img3 from "@/assets/images/project_lynkco_3.png";
import type { ProjectData } from "~/types/ProjectData";

export default function lynkcoComp() {
  return {
    id: "lynkco",
    name: "Lynk Co.",
    type: "Client",
    imgs: [Img1, Img2, Img3],
    descriptionShort:
      "A web platform for exclusive event invitations, sending email invites and managing access via QR codes and on-site scanning.",
    descriptionLong:
      "This project is a web platform designed for exclusive events, such as a car brand launch. Invitations are sent directly via email to selected guests, and access is securely managed with QR codes scanned at the venue. The system ensures smooth check-in and a premium experience for attendees while providing organizers full control over guest access.",
    techStack: ["Vue", "Quasar", "Firebase"],
    url: "https://lynkco-panama.com/",
    year: "2025",
  } as ProjectData;
}
