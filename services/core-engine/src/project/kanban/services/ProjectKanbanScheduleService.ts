import { ProjectKanbanScheduleModel, ProjectKanbanScheduleValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanSchedule";

export class ProjectKanbanScheduleService {
  private repository = new Map<string, ProjectKanbanScheduleModel>();

  public create(data: Omit<ProjectKanbanScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanScheduleModel>): ProjectKanbanScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanScheduleModel = {
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
