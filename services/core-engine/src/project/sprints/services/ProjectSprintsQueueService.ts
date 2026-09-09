import { ProjectSprintsQueueModel, ProjectSprintsQueueValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsQueue";

export class ProjectSprintsQueueService {
  private repository = new Map<string, ProjectSprintsQueueModel>();

  public create(data: Omit<ProjectSprintsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsQueueModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsQueueModel>): ProjectSprintsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsQueueModel = {
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
