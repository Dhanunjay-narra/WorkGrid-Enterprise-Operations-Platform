import { ProjectSprintsMetricModel, ProjectSprintsMetricValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsMetric";

export class ProjectSprintsMetricService {
  private repository = new Map<string, ProjectSprintsMetricModel>();

  public create(data: Omit<ProjectSprintsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsMetricModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsMetricModel>): ProjectSprintsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsMetricModel = {
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
