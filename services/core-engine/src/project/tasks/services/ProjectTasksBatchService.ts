import { ProjectTasksBatchModel, ProjectTasksBatchValidator } from "@nexora/types/domains/project/tasks/ProjectTasksBatch";

export class ProjectTasksBatchService {
  private repository = new Map<string, ProjectTasksBatchModel>();

  public create(data: Omit<ProjectTasksBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksBatchModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksBatchModel>): ProjectTasksBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksBatchModel = {
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
