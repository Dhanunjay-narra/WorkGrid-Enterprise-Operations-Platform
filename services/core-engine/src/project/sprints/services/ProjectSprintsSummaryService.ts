import { ProjectSprintsSummaryModel, ProjectSprintsSummaryValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsSummary";

export class ProjectSprintsSummaryService {
  private repository = new Map<string, ProjectSprintsSummaryModel>();

  public create(data: Omit<ProjectSprintsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsSummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsSummaryModel>): ProjectSprintsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsSummaryModel = {
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
