import { ProjectRisksStateModel, ProjectRisksStateValidator } from "@nexora/types/domains/project/risks/ProjectRisksState";

export class ProjectRisksStateService {
  private repository = new Map<string, ProjectRisksStateModel>();

  public create(data: Omit<ProjectRisksStateModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksStateModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksStateModel>): ProjectRisksStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksStateModel = {
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
