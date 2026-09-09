import { ProjectKanbanQueueModel, ProjectKanbanQueueValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanQueue";

export class ProjectKanbanQueueService {
  private repository = new Map<string, ProjectKanbanQueueModel>();

  public create(data: Omit<ProjectKanbanQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanQueueModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanQueueModel>): ProjectKanbanQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanQueueModel = {
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
