import { type ProjectData } from "~/types/ProjectData";

const onespot = DataOneSpotComp();
const mygrades = DataMyGradesComp();
const lynkco = DataLynkCoComp();
const wrwlf = DataWrwlfComp();
const osstudio = DataOsStudioComp();
const passcrate = DataPassCrateComp();
const osawsdemo = DataOneSpotAWSDemoComp();
const demfantasy = DataDemFantasyComp();

export default function projectsComp() {
  return [
    onespot,
    mygrades,
    lynkco,
    wrwlf,
    demfantasy,
    osstudio,
    passcrate,
    osawsdemo,
  ] as ProjectData[];
}
