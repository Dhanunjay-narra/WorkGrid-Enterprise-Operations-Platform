import { ProjectTasksEntryModel, ProjectTasksEntryValidator } from "@nexora/types/domains/project/tasks/ProjectTasksEntry";

export class ProjectTasksEntryService {
  private repository = new Map<string, ProjectTasksEntryModel>();

  public create(data: Omit<ProjectTasksEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksEntryModel>): ProjectTasksEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksEntryModel = {
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
