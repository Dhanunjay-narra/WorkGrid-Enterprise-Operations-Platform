import { ProjectSprintsTaskModel, ProjectSprintsTaskValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsTask";

export class ProjectSprintsTaskService {
  private repository = new Map<string, ProjectSprintsTaskModel>();

  public create(data: Omit<ProjectSprintsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsTaskModel>): ProjectSprintsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsTaskModel = {
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
