import { ProjectEpicsTaskModel, ProjectEpicsTaskValidator } from "@nexora/types/domains/project/epics/ProjectEpicsTask";

export class ProjectEpicsTaskService {
  private repository = new Map<string, ProjectEpicsTaskModel>();

  public create(data: Omit<ProjectEpicsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsTaskModel>): ProjectEpicsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsTaskModel = {
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
