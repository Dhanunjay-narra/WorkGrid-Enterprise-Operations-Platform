import { ProjectTasksEventModel, ProjectTasksEventValidator } from "@nexora/types/domains/project/tasks/ProjectTasksEvent";

export class ProjectTasksEventService {
  private repository = new Map<string, ProjectTasksEventModel>();

  public create(data: Omit<ProjectTasksEventModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksEventModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksEventModel>): ProjectTasksEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksEventModel = {
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
