import { ProjectTasksNodeModel, ProjectTasksNodeValidator } from "@nexora/types/domains/project/tasks/ProjectTasksNode";

export class ProjectTasksNodeService {
  private repository = new Map<string, ProjectTasksNodeModel>();

  public create(data: Omit<ProjectTasksNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksNodeModel>): ProjectTasksNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksNodeModel = {
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
