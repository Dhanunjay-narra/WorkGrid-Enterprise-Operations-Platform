import { ProjectEpicsReportModel, ProjectEpicsReportValidator } from "@nexora/types/domains/project/epics/ProjectEpicsReport";

export class ProjectEpicsReportService {
  private repository = new Map<string, ProjectEpicsReportModel>();

  public create(data: Omit<ProjectEpicsReportModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsReportModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsReportModel>): ProjectEpicsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsReportModel = {
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
