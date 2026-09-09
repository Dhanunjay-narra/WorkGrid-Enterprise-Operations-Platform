import { ProjectSprintsPolicyModel, ProjectSprintsPolicyValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsPolicy";

export class ProjectSprintsPolicyService {
  private repository = new Map<string, ProjectSprintsPolicyModel>();

  public create(data: Omit<ProjectSprintsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsPolicyModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsPolicyModel>): ProjectSprintsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsPolicyModel = {
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
