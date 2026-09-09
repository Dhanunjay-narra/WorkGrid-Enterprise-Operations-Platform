import { ProjectWorkspacesScheduleModel, ProjectWorkspacesScheduleValidator } from "@nexora/types/domains/project/workspaces/ProjectWorkspacesSchedule";

export class ProjectWorkspacesScheduleService {
  private repository = new Map<string, ProjectWorkspacesScheduleModel>();

  public create(data: Omit<ProjectWorkspacesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectWorkspacesScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectWorkspacesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectWorkspacesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectWorkspacesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectWorkspacesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectWorkspacesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectWorkspacesScheduleModel>): ProjectWorkspacesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectWorkspacesScheduleModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
