import { ProjectCapacitySummaryModel, ProjectCapacitySummaryValidator } from "@nexora/types/domains/project/capacity/ProjectCapacitySummary";

export class ProjectCapacitySummaryService {
  private repository = new Map<string, ProjectCapacitySummaryModel>();

  public create(data: Omit<ProjectCapacitySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacitySummaryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacitySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacitySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacitySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacitySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacitySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacitySummaryModel>): ProjectCapacitySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacitySummaryModel = {
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
