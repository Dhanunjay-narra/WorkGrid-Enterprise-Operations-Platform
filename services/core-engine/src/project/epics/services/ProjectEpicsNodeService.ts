import { ProjectEpicsNodeModel, ProjectEpicsNodeValidator } from "@nexora/types/domains/project/epics/ProjectEpicsNode";

export class ProjectEpicsNodeService {
  private repository = new Map<string, ProjectEpicsNodeModel>();

  public create(data: Omit<ProjectEpicsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsNodeModel>): ProjectEpicsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsNodeModel = {
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
