import { ProjectKanbanSummaryModel, ProjectKanbanSummaryValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanSummary";

export class ProjectKanbanSummaryService {
  private repository = new Map<string, ProjectKanbanSummaryModel>();

  public create(data: Omit<ProjectKanbanSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanSummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanSummaryModel>): ProjectKanbanSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanSummaryModel = {
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
