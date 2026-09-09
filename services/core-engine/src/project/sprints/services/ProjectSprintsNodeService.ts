import { ProjectSprintsNodeModel, ProjectSprintsNodeValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsNode";

export class ProjectSprintsNodeService {
  private repository = new Map<string, ProjectSprintsNodeModel>();

  public create(data: Omit<ProjectSprintsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsNodeModel>): ProjectSprintsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsNodeModel = {
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
