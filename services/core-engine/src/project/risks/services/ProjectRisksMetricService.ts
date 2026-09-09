import { ProjectRisksMetricModel, ProjectRisksMetricValidator } from "@nexora/types/domains/project/risks/ProjectRisksMetric";

export class ProjectRisksMetricService {
  private repository = new Map<string, ProjectRisksMetricModel>();

  public create(data: Omit<ProjectRisksMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksMetricModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksMetricModel>): ProjectRisksMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksMetricModel = {
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
