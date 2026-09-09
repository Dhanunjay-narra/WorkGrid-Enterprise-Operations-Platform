import { ProjectKanbanEntryModel, ProjectKanbanEntryValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanEntry";

export class ProjectKanbanEntryService {
  private repository = new Map<string, ProjectKanbanEntryModel>();

  public create(data: Omit<ProjectKanbanEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanEntryModel>): ProjectKanbanEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanEntryModel = {
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
