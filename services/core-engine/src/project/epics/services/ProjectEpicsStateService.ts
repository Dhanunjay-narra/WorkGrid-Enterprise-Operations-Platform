import { ProjectEpicsStateModel, ProjectEpicsStateValidator } from "@nexora/types/domains/project/epics/ProjectEpicsState";

export class ProjectEpicsStateService {
  private repository = new Map<string, ProjectEpicsStateModel>();

  public create(data: Omit<ProjectEpicsStateModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsStateModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsStateModel>): ProjectEpicsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsStateModel = {
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
