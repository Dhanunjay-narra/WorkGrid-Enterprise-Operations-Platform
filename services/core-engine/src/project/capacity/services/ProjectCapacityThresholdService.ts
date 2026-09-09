import { ProjectCapacityThresholdModel, ProjectCapacityThresholdValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityThreshold";

export class ProjectCapacityThresholdService {
  private repository = new Map<string, ProjectCapacityThresholdModel>();

  public create(data: Omit<ProjectCapacityThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityThresholdModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityThresholdModel>): ProjectCapacityThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityThresholdModel = {
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
