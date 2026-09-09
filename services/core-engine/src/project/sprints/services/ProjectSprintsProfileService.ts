import { ProjectSprintsProfileModel, ProjectSprintsProfileValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsProfile";

export class ProjectSprintsProfileService {
  private repository = new Map<string, ProjectSprintsProfileModel>();

  public create(data: Omit<ProjectSprintsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsProfileModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsProfileModel>): ProjectSprintsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsProfileModel = {
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
