import { ProjectRisksBatchModel, ProjectRisksBatchValidator } from "@nexora/types/domains/project/risks/ProjectRisksBatch";

export class ProjectRisksBatchService {
  private repository = new Map<string, ProjectRisksBatchModel>();

  public create(data: Omit<ProjectRisksBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksBatchModel>): ProjectRisksBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksBatchModel = {
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
