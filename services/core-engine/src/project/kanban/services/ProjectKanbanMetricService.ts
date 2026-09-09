import { ProjectKanbanMetricModel, ProjectKanbanMetricValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanMetric";

export class ProjectKanbanMetricService {
  private repository = new Map<string, ProjectKanbanMetricModel>();

  public create(data: Omit<ProjectKanbanMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanMetricModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanMetricModel>): ProjectKanbanMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanMetricModel = {
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
