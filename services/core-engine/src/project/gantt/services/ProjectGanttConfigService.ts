import { ProjectGanttConfigModel, ProjectGanttConfigValidator } from "@nexora/types/domains/project/gantt/ProjectGanttConfig";

export class ProjectGanttConfigService {
  private repository = new Map<string, ProjectGanttConfigModel>();

  public create(data: Omit<ProjectGanttConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttConfigModel>): ProjectGanttConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttConfigModel = {
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
