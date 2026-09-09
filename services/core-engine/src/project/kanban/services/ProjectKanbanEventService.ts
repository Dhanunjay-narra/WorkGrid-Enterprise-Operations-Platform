import { ProjectKanbanEventModel, ProjectKanbanEventValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanEvent";

export class ProjectKanbanEventService {
  private repository = new Map<string, ProjectKanbanEventModel>();

  public create(data: Omit<ProjectKanbanEventModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanEventModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanEventModel>): ProjectKanbanEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanEventModel = {
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
