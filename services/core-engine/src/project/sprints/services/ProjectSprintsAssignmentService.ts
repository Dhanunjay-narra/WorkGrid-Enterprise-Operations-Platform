import { ProjectSprintsAssignmentModel, ProjectSprintsAssignmentValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsAssignment";

export class ProjectSprintsAssignmentService {
  private repository = new Map<string, ProjectSprintsAssignmentModel>();

  public create(data: Omit<ProjectSprintsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsAssignmentModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsAssignmentModel>): ProjectSprintsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsAssignmentModel = {
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
