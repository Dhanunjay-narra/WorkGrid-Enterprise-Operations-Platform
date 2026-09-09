import { ProjectWorkspacesAssignmentModel, ProjectWorkspacesAssignmentValidator } from "@nexora/types/domains/project/workspaces/ProjectWorkspacesAssignment";

export class ProjectWorkspacesAssignmentService {
  private repository = new Map<string, ProjectWorkspacesAssignmentModel>();

  public create(data: Omit<ProjectWorkspacesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectWorkspacesAssignmentModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectWorkspacesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectWorkspacesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectWorkspacesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectWorkspacesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectWorkspacesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectWorkspacesAssignmentModel>): ProjectWorkspacesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectWorkspacesAssignmentModel = {
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
