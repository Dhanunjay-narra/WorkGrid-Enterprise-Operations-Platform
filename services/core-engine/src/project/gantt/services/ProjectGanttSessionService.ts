import { ProjectGanttSessionModel, ProjectGanttSessionValidator } from "@nexora/types/domains/project/gantt/ProjectGanttSession";

export class ProjectGanttSessionService {
  private repository = new Map<string, ProjectGanttSessionModel>();

  public create(data: Omit<ProjectGanttSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttSessionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttSessionModel>): ProjectGanttSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttSessionModel = {
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
