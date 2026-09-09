import { ProjectTasksTaskModel, ProjectTasksTaskValidator } from "@nexora/types/domains/project/tasks/ProjectTasksTask";

export class ProjectTasksTaskService {
  private repository = new Map<string, ProjectTasksTaskModel>();

  public create(data: Omit<ProjectTasksTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksTaskModel>): ProjectTasksTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksTaskModel = {
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
