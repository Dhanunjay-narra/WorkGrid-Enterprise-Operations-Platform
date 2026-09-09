import { ProjectCapacityEventModel, ProjectCapacityEventValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityEvent";

export class ProjectCapacityEventService {
  private repository = new Map<string, ProjectCapacityEventModel>();

  public create(data: Omit<ProjectCapacityEventModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityEventModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityEventModel>): ProjectCapacityEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityEventModel = {
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
