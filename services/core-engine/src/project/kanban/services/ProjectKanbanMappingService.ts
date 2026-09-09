import { ProjectKanbanMappingModel, ProjectKanbanMappingValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanMapping";

export class ProjectKanbanMappingService {
  private repository = new Map<string, ProjectKanbanMappingModel>();

  public create(data: Omit<ProjectKanbanMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanMappingModel>): ProjectKanbanMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanMappingModel = {
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
