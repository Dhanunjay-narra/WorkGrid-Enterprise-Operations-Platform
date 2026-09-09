import { ProjectTasksSessionModel, ProjectTasksSessionValidator } from "@nexora/types/domains/project/tasks/ProjectTasksSession";

export class ProjectTasksSessionService {
  private repository = new Map<string, ProjectTasksSessionModel>();

  public create(data: Omit<ProjectTasksSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksSessionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksSessionModel>): ProjectTasksSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksSessionModel = {
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
