import { ProjectKanbanReportModel, ProjectKanbanReportValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanReport";

export class ProjectKanbanReportService {
  private repository = new Map<string, ProjectKanbanReportModel>();

  public create(data: Omit<ProjectKanbanReportModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanReportModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanReportModel>): ProjectKanbanReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanReportModel = {
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
