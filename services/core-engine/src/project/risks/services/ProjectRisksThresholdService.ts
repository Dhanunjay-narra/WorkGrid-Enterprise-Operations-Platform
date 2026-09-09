import { ProjectRisksThresholdModel, ProjectRisksThresholdValidator } from "@nexora/types/domains/project/risks/ProjectRisksThreshold";

export class ProjectRisksThresholdService {
  private repository = new Map<string, ProjectRisksThresholdModel>();

  public create(data: Omit<ProjectRisksThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksThresholdModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksThresholdModel>): ProjectRisksThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksThresholdModel = {
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
