import { ProjectTasksItemModel, ProjectTasksItemValidator } from "@nexora/types/domains/project/tasks/ProjectTasksItem";

export class ProjectTasksItemService {
  private repository = new Map<string, ProjectTasksItemModel>();

  public create(data: Omit<ProjectTasksItemModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksItemModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksItemModel>): ProjectTasksItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksItemModel = {
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
