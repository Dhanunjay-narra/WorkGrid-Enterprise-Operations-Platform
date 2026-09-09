import { ProjectTasksMetricModel, ProjectTasksMetricValidator } from "@nexora/types/domains/project/tasks/ProjectTasksMetric";

export class ProjectTasksMetricService {
  private repository = new Map<string, ProjectTasksMetricModel>();

  public create(data: Omit<ProjectTasksMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksMetricModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksMetricModel>): ProjectTasksMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksMetricModel = {
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
