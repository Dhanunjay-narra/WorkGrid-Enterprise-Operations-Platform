import { ProjectSprintsRecordModel, ProjectSprintsRecordValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsRecord";

export class ProjectSprintsRecordService {
  private repository = new Map<string, ProjectSprintsRecordModel>();

  public create(data: Omit<ProjectSprintsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsRecordModel>): ProjectSprintsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsRecordModel = {
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
