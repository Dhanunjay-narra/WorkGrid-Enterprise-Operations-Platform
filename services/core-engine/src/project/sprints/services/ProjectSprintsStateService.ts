import { ProjectSprintsStateModel, ProjectSprintsStateValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsState";

export class ProjectSprintsStateService {
  private repository = new Map<string, ProjectSprintsStateModel>();

  public create(data: Omit<ProjectSprintsStateModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsStateModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsStateModel>): ProjectSprintsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsStateModel = {
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
