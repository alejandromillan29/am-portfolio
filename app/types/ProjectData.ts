export interface ProjectData {
  id: string;
  name: string;
  type: "Personal" | "Client" | "Proprietary";
  imgs: string[];
  descriptionShort: string;
  descriptionLong: string;
  techStack: string[];
  year: string;
  url: string;
  repo?: string;
}
