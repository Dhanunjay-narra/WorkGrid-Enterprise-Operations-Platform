import { ProjectRisksItemModel, ProjectRisksItemValidator } from "@nexora/types/domains/project/risks/ProjectRisksItem";

export class ProjectRisksItemService {
  private repository = new Map<string, ProjectRisksItemModel>();

  public create(data: Omit<ProjectRisksItemModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksItemModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksItemModel>): ProjectRisksItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksItemModel = {
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
