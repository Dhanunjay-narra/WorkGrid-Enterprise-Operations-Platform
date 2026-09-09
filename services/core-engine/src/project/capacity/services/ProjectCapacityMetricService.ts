import { ProjectCapacityMetricModel, ProjectCapacityMetricValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityMetric";

export class ProjectCapacityMetricService {
  private repository = new Map<string, ProjectCapacityMetricModel>();

  public create(data: Omit<ProjectCapacityMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityMetricModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityMetricModel>): ProjectCapacityMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityMetricModel = {
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
