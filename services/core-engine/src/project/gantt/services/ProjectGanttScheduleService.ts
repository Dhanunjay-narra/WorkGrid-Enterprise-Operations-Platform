import { ProjectGanttScheduleModel, ProjectGanttScheduleValidator } from "@nexora/types/domains/project/gantt/ProjectGanttSchedule";

export class ProjectGanttScheduleService {
  private repository = new Map<string, ProjectGanttScheduleModel>();

  public create(data: Omit<ProjectGanttScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttScheduleModel>): ProjectGanttScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttScheduleModel = {
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
