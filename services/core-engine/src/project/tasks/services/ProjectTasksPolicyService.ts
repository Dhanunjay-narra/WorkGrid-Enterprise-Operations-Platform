import { ProjectTasksPolicyModel, ProjectTasksPolicyValidator } from "@nexora/types/domains/project/tasks/ProjectTasksPolicy";

export class ProjectTasksPolicyService {
  private repository = new Map<string, ProjectTasksPolicyModel>();

  public create(data: Omit<ProjectTasksPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksPolicyModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksPolicyModel>): ProjectTasksPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksPolicyModel = {
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
