import { ProjectSprintsMappingModel, ProjectSprintsMappingValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsMapping";

export class ProjectSprintsMappingService {
  private repository = new Map<string, ProjectSprintsMappingModel>();

  public create(data: Omit<ProjectSprintsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsMappingModel>): ProjectSprintsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsMappingModel = {
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
