import { ProjectWorkspacesSnapshotModel, ProjectWorkspacesSnapshotValidator } from "@nexora/types/domains/project/workspaces/ProjectWorkspacesSnapshot";

export class ProjectWorkspacesSnapshotService {
  private repository = new Map<string, ProjectWorkspacesSnapshotModel>();

  public create(data: Omit<ProjectWorkspacesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectWorkspacesSnapshotModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectWorkspacesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectWorkspacesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectWorkspacesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectWorkspacesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectWorkspacesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectWorkspacesSnapshotModel>): ProjectWorkspacesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectWorkspacesSnapshotModel = {
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
