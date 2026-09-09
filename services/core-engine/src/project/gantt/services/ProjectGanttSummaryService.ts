import { ProjectGanttSummaryModel, ProjectGanttSummaryValidator } from "@nexora/types/domains/project/gantt/ProjectGanttSummary";

export class ProjectGanttSummaryService {
  private repository = new Map<string, ProjectGanttSummaryModel>();

  public create(data: Omit<ProjectGanttSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttSummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttSummaryModel>): ProjectGanttSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttSummaryModel = {
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
