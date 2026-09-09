import { ProjectEpicsSnapshotModel, ProjectEpicsSnapshotValidator } from "@nexora/types/domains/project/epics/ProjectEpicsSnapshot";

export class ProjectEpicsSnapshotService {
  private repository = new Map<string, ProjectEpicsSnapshotModel>();

  public create(data: Omit<ProjectEpicsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsSnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsSnapshotModel>): ProjectEpicsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsSnapshotModel = {
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
