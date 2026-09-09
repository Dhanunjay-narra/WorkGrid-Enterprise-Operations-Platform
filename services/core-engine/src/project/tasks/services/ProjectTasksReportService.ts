import { ProjectTasksReportModel, ProjectTasksReportValidator } from "@nexora/types/domains/project/tasks/ProjectTasksReport";

export class ProjectTasksReportService {
  private repository = new Map<string, ProjectTasksReportModel>();

  public create(data: Omit<ProjectTasksReportModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksReportModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksReportModel>): ProjectTasksReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksReportModel = {
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
