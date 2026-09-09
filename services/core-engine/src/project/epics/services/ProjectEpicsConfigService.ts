import { ProjectEpicsConfigModel, ProjectEpicsConfigValidator } from "@nexora/types/domains/project/epics/ProjectEpicsConfig";

export class ProjectEpicsConfigService {
  private repository = new Map<string, ProjectEpicsConfigModel>();

  public create(data: Omit<ProjectEpicsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsConfigModel>): ProjectEpicsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsConfigModel = {
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
