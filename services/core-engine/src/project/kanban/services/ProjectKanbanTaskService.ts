import { ProjectKanbanTaskModel, ProjectKanbanTaskValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanTask";

export class ProjectKanbanTaskService {
  private repository = new Map<string, ProjectKanbanTaskModel>();

  public create(data: Omit<ProjectKanbanTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanTaskModel>): ProjectKanbanTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanTaskModel = {
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
