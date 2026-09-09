import { ProjectCapacityEntryModel, ProjectCapacityEntryValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityEntry";

export class ProjectCapacityEntryService {
  private repository = new Map<string, ProjectCapacityEntryModel>();

  public create(data: Omit<ProjectCapacityEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityEntryModel>): ProjectCapacityEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityEntryModel = {
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
