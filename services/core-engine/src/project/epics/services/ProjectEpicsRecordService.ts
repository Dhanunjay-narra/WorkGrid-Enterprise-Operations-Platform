import { ProjectEpicsRecordModel, ProjectEpicsRecordValidator } from "@nexora/types/domains/project/epics/ProjectEpicsRecord";

export class ProjectEpicsRecordService {
  private repository = new Map<string, ProjectEpicsRecordModel>();

  public create(data: Omit<ProjectEpicsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsRecordModel>): ProjectEpicsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsRecordModel = {
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
