import { ProjectKanbanBatchModel, ProjectKanbanBatchValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanBatch";

export class ProjectKanbanBatchService {
  private repository = new Map<string, ProjectKanbanBatchModel>();

  public create(data: Omit<ProjectKanbanBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanBatchModel>): ProjectKanbanBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanBatchModel = {
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
