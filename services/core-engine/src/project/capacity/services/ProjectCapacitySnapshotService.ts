import { ProjectCapacitySnapshotModel, ProjectCapacitySnapshotValidator } from "@nexora/types/domains/project/capacity/ProjectCapacitySnapshot";

export class ProjectCapacitySnapshotService {
  private repository = new Map<string, ProjectCapacitySnapshotModel>();

  public create(data: Omit<ProjectCapacitySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacitySnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacitySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacitySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacitySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacitySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacitySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacitySnapshotModel>): ProjectCapacitySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacitySnapshotModel = {
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
