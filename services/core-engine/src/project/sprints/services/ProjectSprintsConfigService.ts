import { ProjectSprintsConfigModel, ProjectSprintsConfigValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsConfig";

export class ProjectSprintsConfigService {
  private repository = new Map<string, ProjectSprintsConfigModel>();

  public create(data: Omit<ProjectSprintsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsConfigModel>): ProjectSprintsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsConfigModel = {
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
