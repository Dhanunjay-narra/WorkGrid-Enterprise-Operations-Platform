import { ProjectCapacityPolicyModel, ProjectCapacityPolicyValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityPolicy";

export class ProjectCapacityPolicyService {
  private repository = new Map<string, ProjectCapacityPolicyModel>();

  public create(data: Omit<ProjectCapacityPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityPolicyModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityPolicyModel>): ProjectCapacityPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityPolicyModel = {
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
