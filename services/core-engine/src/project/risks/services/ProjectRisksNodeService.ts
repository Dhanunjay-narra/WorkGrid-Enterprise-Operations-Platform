import { ProjectRisksNodeModel, ProjectRisksNodeValidator } from "@nexora/types/domains/project/risks/ProjectRisksNode";

export class ProjectRisksNodeService {
  private repository = new Map<string, ProjectRisksNodeModel>();

  public create(data: Omit<ProjectRisksNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksNodeModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksNodeModel>): ProjectRisksNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksNodeModel = {
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
