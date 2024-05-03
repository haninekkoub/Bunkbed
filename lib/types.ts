interface AboutBlock {
  _type: "block.banner";
  aboutDescription: string;
  icon: string;
}
interface Project {
  image: "image";
  name: string;
  url: string;
}
interface ProjectList {
  projects: Project[];
}

interface Service {
  image: "image";
  name: string;
  description: string;
  id: number;
}
interface ServiceList {
  services: Service[];
}

interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  content: Array<AboutBlock>;
}

export type { AboutBlock, Page, Project, ProjectList, Service, ServiceList };
