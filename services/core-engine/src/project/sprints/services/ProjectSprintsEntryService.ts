import { ProjectSprintsEntryModel, ProjectSprintsEntryValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsEntry";

export class ProjectSprintsEntryService {
  private repository = new Map<string, ProjectSprintsEntryModel>();

  public create(data: Omit<ProjectSprintsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsEntryModel>): ProjectSprintsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsEntryModel = {
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
