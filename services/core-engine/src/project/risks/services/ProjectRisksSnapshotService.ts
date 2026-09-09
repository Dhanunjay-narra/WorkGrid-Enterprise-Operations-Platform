import { ProjectRisksSnapshotModel, ProjectRisksSnapshotValidator } from "@nexora/types/domains/project/risks/ProjectRisksSnapshot";

export class ProjectRisksSnapshotService {
  private repository = new Map<string, ProjectRisksSnapshotModel>();

  public create(data: Omit<ProjectRisksSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksSnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksSnapshotModel>): ProjectRisksSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksSnapshotModel = {
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
