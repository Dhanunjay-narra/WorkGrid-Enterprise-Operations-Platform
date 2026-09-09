import { ProjectKanbanConfigModel, ProjectKanbanConfigValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanConfig";

export class ProjectKanbanConfigService {
  private repository = new Map<string, ProjectKanbanConfigModel>();

  public create(data: Omit<ProjectKanbanConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanConfigModel>): ProjectKanbanConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanConfigModel = {
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
