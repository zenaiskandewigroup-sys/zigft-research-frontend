import { workspaceRepository } from "../repositories/workspace.repository";

export class WorkspaceService {
  async getResearches() {
    return workspaceRepository.getResearches();
  }
}

export const workspaceService = new WorkspaceService();
