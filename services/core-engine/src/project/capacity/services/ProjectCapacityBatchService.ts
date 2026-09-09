import { ProjectCapacityBatchModel, ProjectCapacityBatchValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityBatch";

export class ProjectCapacityBatchService {
  private repository = new Map<string, ProjectCapacityBatchModel>();

  public create(data: Omit<ProjectCapacityBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityBatchModel>): ProjectCapacityBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityBatchModel = {
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
