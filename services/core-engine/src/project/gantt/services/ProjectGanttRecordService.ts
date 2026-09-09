import { ProjectGanttRecordModel, ProjectGanttRecordValidator } from "@nexora/types/domains/project/gantt/ProjectGanttRecord";

export class ProjectGanttRecordService {
  private repository = new Map<string, ProjectGanttRecordModel>();

  public create(data: Omit<ProjectGanttRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttRecordModel>): ProjectGanttRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttRecordModel = {
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
