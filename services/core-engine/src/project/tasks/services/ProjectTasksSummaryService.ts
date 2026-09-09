import { ProjectTasksSummaryModel, ProjectTasksSummaryValidator } from "@nexora/types/domains/project/tasks/ProjectTasksSummary";

export class ProjectTasksSummaryService {
  private repository = new Map<string, ProjectTasksSummaryModel>();

  public create(data: Omit<ProjectTasksSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksSummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksSummaryModel>): ProjectTasksSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksSummaryModel = {
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
