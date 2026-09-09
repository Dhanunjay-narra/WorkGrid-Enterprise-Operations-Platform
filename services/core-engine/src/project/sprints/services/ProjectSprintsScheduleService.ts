import { ProjectSprintsScheduleModel, ProjectSprintsScheduleValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsSchedule";

export class ProjectSprintsScheduleService {
  private repository = new Map<string, ProjectSprintsScheduleModel>();

  public create(data: Omit<ProjectSprintsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsScheduleModel>): ProjectSprintsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsScheduleModel = {
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
