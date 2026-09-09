import { ProjectKanbanStateModel, ProjectKanbanStateValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanState";

export class ProjectKanbanStateService {
  private repository = new Map<string, ProjectKanbanStateModel>();

  public create(data: Omit<ProjectKanbanStateModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanStateModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanStateModel>): ProjectKanbanStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanStateModel = {
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
