import { ProjectRisksEntryModel, ProjectRisksEntryValidator } from "@nexora/types/domains/project/risks/ProjectRisksEntry";

export class ProjectRisksEntryService {
  private repository = new Map<string, ProjectRisksEntryModel>();

  public create(data: Omit<ProjectRisksEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksEntryModel>): ProjectRisksEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksEntryModel = {
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
