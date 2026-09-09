import { ProjectCapacityRecordModel, ProjectCapacityRecordValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityRecord";

export class ProjectCapacityRecordService {
  private repository = new Map<string, ProjectCapacityRecordModel>();

  public create(data: Omit<ProjectCapacityRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityRecordModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityRecordModel>): ProjectCapacityRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityRecordModel = {
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
