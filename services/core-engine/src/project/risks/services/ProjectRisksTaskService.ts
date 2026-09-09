import { ProjectRisksTaskModel, ProjectRisksTaskValidator } from "@nexora/types/domains/project/risks/ProjectRisksTask";

export class ProjectRisksTaskService {
  private repository = new Map<string, ProjectRisksTaskModel>();

  public create(data: Omit<ProjectRisksTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksTaskModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksTaskModel>): ProjectRisksTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksTaskModel = {
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
