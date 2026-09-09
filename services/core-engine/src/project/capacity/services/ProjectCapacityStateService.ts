import { ProjectCapacityStateModel, ProjectCapacityStateValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityState";

export class ProjectCapacityStateService {
  private repository = new Map<string, ProjectCapacityStateModel>();

  public create(data: Omit<ProjectCapacityStateModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityStateModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityStateModel>): ProjectCapacityStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityStateModel = {
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
