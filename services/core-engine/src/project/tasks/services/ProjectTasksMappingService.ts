import { ProjectTasksMappingModel, ProjectTasksMappingValidator } from "@nexora/types/domains/project/tasks/ProjectTasksMapping";

export class ProjectTasksMappingService {
  private repository = new Map<string, ProjectTasksMappingModel>();

  public create(data: Omit<ProjectTasksMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksMappingModel>): ProjectTasksMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksMappingModel = {
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
