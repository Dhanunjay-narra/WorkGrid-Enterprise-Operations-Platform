import { ProjectKanbanAssignmentModel, ProjectKanbanAssignmentValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanAssignment";

export class ProjectKanbanAssignmentService {
  private repository = new Map<string, ProjectKanbanAssignmentModel>();

  public create(data: Omit<ProjectKanbanAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanAssignmentModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanAssignmentModel>): ProjectKanbanAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanAssignmentModel = {
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
