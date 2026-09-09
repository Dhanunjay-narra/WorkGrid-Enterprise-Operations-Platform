import { ProjectRisksReportModel, ProjectRisksReportValidator } from "@nexora/types/domains/project/risks/ProjectRisksReport";

export class ProjectRisksReportService {
  private repository = new Map<string, ProjectRisksReportModel>();

  public create(data: Omit<ProjectRisksReportModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksReportModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksReportModel>): ProjectRisksReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksReportModel = {
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
