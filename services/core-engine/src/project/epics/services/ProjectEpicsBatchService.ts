import { ProjectEpicsBatchModel, ProjectEpicsBatchValidator } from "@nexora/types/domains/project/epics/ProjectEpicsBatch";

export class ProjectEpicsBatchService {
  private repository = new Map<string, ProjectEpicsBatchModel>();

  public create(data: Omit<ProjectEpicsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsBatchModel>): ProjectEpicsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsBatchModel = {
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
