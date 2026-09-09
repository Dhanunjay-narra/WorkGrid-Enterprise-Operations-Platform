import { ProjectEpicsMappingModel, ProjectEpicsMappingValidator } from "@nexora/types/domains/project/epics/ProjectEpicsMapping";

export class ProjectEpicsMappingService {
  private repository = new Map<string, ProjectEpicsMappingModel>();

  public create(data: Omit<ProjectEpicsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsMappingModel>): ProjectEpicsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsMappingModel = {
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
