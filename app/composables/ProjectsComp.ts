import { type ProjectData } from "~/types/ProjectData";

const onespot = DataOneSpotComp();
const mygrades = DataMyGradesComp();
const lynkco = DataLynkCoComp();

export default function projectsComp() {
  return [onespot, mygrades, lynkco] as ProjectData[];
}
