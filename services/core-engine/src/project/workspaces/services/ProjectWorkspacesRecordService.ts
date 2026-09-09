import { ProjectWorkspacesRecordModel, ProjectWorkspacesRecordValidator } from "@nexora/types/domains/project/workspaces/ProjectWorkspacesRecord";

export class ProjectWorkspacesRecordService {
  private repository = new Map<string, ProjectWorkspacesRecordModel>();

  public create(data: Omit<ProjectWorkspacesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectWorkspacesRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectWorkspacesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectWorkspacesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectWorkspacesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectWorkspacesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectWorkspacesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectWorkspacesRecordModel>): ProjectWorkspacesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectWorkspacesRecordModel = {
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
