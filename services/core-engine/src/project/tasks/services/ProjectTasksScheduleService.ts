import { ProjectTasksScheduleModel, ProjectTasksScheduleValidator } from "@nexora/types/domains/project/tasks/ProjectTasksSchedule";

export class ProjectTasksScheduleService {
  private repository = new Map<string, ProjectTasksScheduleModel>();

  public create(data: Omit<ProjectTasksScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksScheduleModel>): ProjectTasksScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksScheduleModel = {
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
