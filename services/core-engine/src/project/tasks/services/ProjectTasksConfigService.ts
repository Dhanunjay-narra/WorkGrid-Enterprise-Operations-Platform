import { ProjectTasksConfigModel, ProjectTasksConfigValidator } from "@nexora/types/domains/project/tasks/ProjectTasksConfig";

export class ProjectTasksConfigService {
  private repository = new Map<string, ProjectTasksConfigModel>();

  public create(data: Omit<ProjectTasksConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksConfigModel>): ProjectTasksConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksConfigModel = {
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
