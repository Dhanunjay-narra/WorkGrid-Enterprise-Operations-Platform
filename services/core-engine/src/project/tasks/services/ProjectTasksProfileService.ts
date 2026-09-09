import { ProjectTasksProfileModel, ProjectTasksProfileValidator } from "@nexora/types/domains/project/tasks/ProjectTasksProfile";

export class ProjectTasksProfileService {
  private repository = new Map<string, ProjectTasksProfileModel>();

  public create(data: Omit<ProjectTasksProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksProfileModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksProfileModel>): ProjectTasksProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksProfileModel = {
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
