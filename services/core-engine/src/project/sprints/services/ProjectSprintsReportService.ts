import { ProjectSprintsReportModel, ProjectSprintsReportValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsReport";

export class ProjectSprintsReportService {
  private repository = new Map<string, ProjectSprintsReportModel>();

  public create(data: Omit<ProjectSprintsReportModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsReportModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsReportModel>): ProjectSprintsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsReportModel = {
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
