import { ProjectGanttAssignmentModel, ProjectGanttAssignmentValidator } from "@nexora/types/domains/project/gantt/ProjectGanttAssignment";

export class ProjectGanttAssignmentService {
  private repository = new Map<string, ProjectGanttAssignmentModel>();

  public create(data: Omit<ProjectGanttAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttAssignmentModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttAssignmentModel>): ProjectGanttAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttAssignmentModel = {
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
