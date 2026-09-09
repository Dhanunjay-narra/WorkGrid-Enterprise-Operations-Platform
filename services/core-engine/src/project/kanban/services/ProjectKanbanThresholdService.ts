import { ProjectKanbanThresholdModel, ProjectKanbanThresholdValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanThreshold";

export class ProjectKanbanThresholdService {
  private repository = new Map<string, ProjectKanbanThresholdModel>();

  public create(data: Omit<ProjectKanbanThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanThresholdModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanThresholdModel>): ProjectKanbanThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanThresholdModel = {
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
