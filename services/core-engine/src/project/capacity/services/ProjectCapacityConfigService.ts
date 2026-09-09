import { ProjectCapacityConfigModel, ProjectCapacityConfigValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityConfig";

export class ProjectCapacityConfigService {
  private repository = new Map<string, ProjectCapacityConfigModel>();

  public create(data: Omit<ProjectCapacityConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityConfigModel>): ProjectCapacityConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityConfigModel = {
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
