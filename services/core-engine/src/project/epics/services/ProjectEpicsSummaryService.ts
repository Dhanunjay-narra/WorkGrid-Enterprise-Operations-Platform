import { ProjectEpicsSummaryModel, ProjectEpicsSummaryValidator } from "@nexora/types/domains/project/epics/ProjectEpicsSummary";

export class ProjectEpicsSummaryService {
  private repository = new Map<string, ProjectEpicsSummaryModel>();

  public create(data: Omit<ProjectEpicsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsSummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsSummaryModel>): ProjectEpicsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsSummaryModel = {
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
