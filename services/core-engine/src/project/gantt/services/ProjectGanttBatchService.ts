import { ProjectGanttBatchModel, ProjectGanttBatchValidator } from "@nexora/types/domains/project/gantt/ProjectGanttBatch";

export class ProjectGanttBatchService {
  private repository = new Map<string, ProjectGanttBatchModel>();

  public create(data: Omit<ProjectGanttBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttBatchModel>): ProjectGanttBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttBatchModel = {
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
