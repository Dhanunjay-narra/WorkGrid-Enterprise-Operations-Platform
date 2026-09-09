import { ProjectGanttThresholdModel, ProjectGanttThresholdValidator } from "@nexora/types/domains/project/gantt/ProjectGanttThreshold";

export class ProjectGanttThresholdService {
  private repository = new Map<string, ProjectGanttThresholdModel>();

  public create(data: Omit<ProjectGanttThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttThresholdModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttThresholdModel>): ProjectGanttThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttThresholdModel = {
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
