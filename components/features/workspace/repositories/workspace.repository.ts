import { researchData } from "../data/research-data";

export class WorkspaceRepository {
  async getResearches() {
    return researchData;
  }
}

export const workspaceRepository = new WorkspaceRepository();
