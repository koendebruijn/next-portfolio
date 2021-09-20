import axios from "axios";
import { Project } from "types/project";

class Backend {
  private BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api/v1/"
      : "https://cryptic-dusk-28152.herokuapp.com/api/v1/";

  public async getProjects() {
    const url = `${this.BASE_URL}projects`;

    const { data: projects } = await axios.get<Project[]>(url);

    return projects;
  }

  public async getProjectById(id: number | string) {
    const url = `${this.BASE_URL}projects/${id}`;

    const { data: project } = await axios.get<Project>(url);

    return project;
  }
}

export const backend = new Backend();
