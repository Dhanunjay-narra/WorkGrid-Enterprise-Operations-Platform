import { ProjectEpicsThresholdModel, ProjectEpicsThresholdValidator } from "@nexora/types/domains/project/epics/ProjectEpicsThreshold";

export class ProjectEpicsThresholdService {
  private repository = new Map<string, ProjectEpicsThresholdModel>();

  public create(data: Omit<ProjectEpicsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsThresholdModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsThresholdModel>): ProjectEpicsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsThresholdModel = {
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
