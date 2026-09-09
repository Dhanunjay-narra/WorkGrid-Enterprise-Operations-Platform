import { ProjectKanbanSessionModel, ProjectKanbanSessionValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanSession";

export class ProjectKanbanSessionService {
  private repository = new Map<string, ProjectKanbanSessionModel>();

  public create(data: Omit<ProjectKanbanSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanSessionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanSessionModel>): ProjectKanbanSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanSessionModel = {
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
