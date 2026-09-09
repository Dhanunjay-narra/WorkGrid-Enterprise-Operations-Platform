import { ProjectCapacityAssignmentModel, ProjectCapacityAssignmentValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityAssignment";

export class ProjectCapacityAssignmentService {
  private repository = new Map<string, ProjectCapacityAssignmentModel>();

  public create(data: Omit<ProjectCapacityAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityAssignmentModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityAssignmentModel>): ProjectCapacityAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityAssignmentModel = {
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
