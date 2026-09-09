import { ProjectCapacityTaskModel, ProjectCapacityTaskValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityTask";

export class ProjectCapacityTaskService {
  private repository = new Map<string, ProjectCapacityTaskModel>();

  public create(data: Omit<ProjectCapacityTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityTaskModel>): ProjectCapacityTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityTaskModel = {
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
