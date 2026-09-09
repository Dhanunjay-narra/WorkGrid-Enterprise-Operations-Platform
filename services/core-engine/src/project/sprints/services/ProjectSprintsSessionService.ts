import { ProjectSprintsSessionModel, ProjectSprintsSessionValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsSession";

export class ProjectSprintsSessionService {
  private repository = new Map<string, ProjectSprintsSessionModel>();

  public create(data: Omit<ProjectSprintsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsSessionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsSessionModel>): ProjectSprintsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsSessionModel = {
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
