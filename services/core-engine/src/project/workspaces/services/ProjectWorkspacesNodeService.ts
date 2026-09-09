import { ProjectWorkspacesNodeModel, ProjectWorkspacesNodeValidator } from "@nexora/types/domains/project/workspaces/ProjectWorkspacesNode";

export class ProjectWorkspacesNodeService {
  private repository = new Map<string, ProjectWorkspacesNodeModel>();

  public create(data: Omit<ProjectWorkspacesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectWorkspacesNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectWorkspacesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectWorkspacesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectWorkspacesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectWorkspacesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectWorkspacesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectWorkspacesNodeModel>): ProjectWorkspacesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectWorkspacesNodeModel = {
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
