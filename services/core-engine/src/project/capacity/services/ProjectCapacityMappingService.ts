import { ProjectCapacityMappingModel, ProjectCapacityMappingValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityMapping";

export class ProjectCapacityMappingService {
  private repository = new Map<string, ProjectCapacityMappingModel>();

  public create(data: Omit<ProjectCapacityMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityMappingModel>): ProjectCapacityMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityMappingModel = {
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
