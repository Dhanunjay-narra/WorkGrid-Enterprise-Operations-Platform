import { ProjectRisksQueueModel, ProjectRisksQueueValidator } from "@nexora/types/domains/project/risks/ProjectRisksQueue";

export class ProjectRisksQueueService {
  private repository = new Map<string, ProjectRisksQueueModel>();

  public create(data: Omit<ProjectRisksQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksQueueModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksQueueModel>): ProjectRisksQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksQueueModel = {
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
