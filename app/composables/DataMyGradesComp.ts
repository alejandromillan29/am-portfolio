import type { ProjectData } from "~/types/ProjectData";

export default function mygradesComp() {
  return {
    id: "mygrades",
    name: "myGrades",
    type: "Personal",
    imgs: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    descriptionShort:
      "A web app with PWA support for students to track grades and estimate their final scores.",
    descriptionLong:
      "myGrades is a web app that helps students monitor their academic progress. With PWA integrations, users can record grades, calculate approximate final scores, and stay updated across devices — all without installing a native app.",
    techStack: ["Vue", "Quasar", "Firebase"],
    url: "https://gradesapp-ccfd8.web.app/",
    year: "2021",
    repo: "https://github.com/KidDarknezz/grades-app",
  } as ProjectData;
}
