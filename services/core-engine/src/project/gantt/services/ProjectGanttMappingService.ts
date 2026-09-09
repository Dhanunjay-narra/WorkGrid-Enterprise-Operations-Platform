import { ProjectGanttMappingModel, ProjectGanttMappingValidator } from "@nexora/types/domains/project/gantt/ProjectGanttMapping";

export class ProjectGanttMappingService {
  private repository = new Map<string, ProjectGanttMappingModel>();

  public create(data: Omit<ProjectGanttMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttMappingModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttMappingModel>): ProjectGanttMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttMappingModel = {
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
