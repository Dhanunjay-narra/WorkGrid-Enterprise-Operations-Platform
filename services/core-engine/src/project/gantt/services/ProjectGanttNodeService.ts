import { ProjectGanttNodeModel, ProjectGanttNodeValidator } from "@nexora/types/domains/project/gantt/ProjectGanttNode";

export class ProjectGanttNodeService {
  private repository = new Map<string, ProjectGanttNodeModel>();

  public create(data: Omit<ProjectGanttNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttNodeModel>): ProjectGanttNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttNodeModel = {
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
