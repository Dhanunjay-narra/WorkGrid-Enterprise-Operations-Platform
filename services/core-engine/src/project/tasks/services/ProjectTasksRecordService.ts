import { ProjectTasksRecordModel, ProjectTasksRecordValidator } from "@nexora/types/domains/project/tasks/ProjectTasksRecord";

export class ProjectTasksRecordService {
  private repository = new Map<string, ProjectTasksRecordModel>();

  public create(data: Omit<ProjectTasksRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksRecordModel>): ProjectTasksRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksRecordModel = {
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
