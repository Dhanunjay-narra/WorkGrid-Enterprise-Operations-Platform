import { ProjectGanttSnapshotModel, ProjectGanttSnapshotValidator } from "@nexora/types/domains/project/gantt/ProjectGanttSnapshot";

export class ProjectGanttSnapshotService {
  private repository = new Map<string, ProjectGanttSnapshotModel>();

  public create(data: Omit<ProjectGanttSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttSnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttSnapshotModel>): ProjectGanttSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttSnapshotModel = {
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
