import { ProjectTasksSnapshotModel, ProjectTasksSnapshotValidator } from "@nexora/types/domains/project/tasks/ProjectTasksSnapshot";

export class ProjectTasksSnapshotService {
  private repository = new Map<string, ProjectTasksSnapshotModel>();

  public create(data: Omit<ProjectTasksSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksSnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksSnapshotModel>): ProjectTasksSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksSnapshotModel = {
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
