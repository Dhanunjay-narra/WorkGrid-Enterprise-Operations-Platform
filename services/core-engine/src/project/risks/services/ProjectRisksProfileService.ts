import { ProjectRisksProfileModel, ProjectRisksProfileValidator } from "@nexora/types/domains/project/risks/ProjectRisksProfile";

export class ProjectRisksProfileService {
  private repository = new Map<string, ProjectRisksProfileModel>();

  public create(data: Omit<ProjectRisksProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksProfileModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksProfileModel>): ProjectRisksProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksProfileModel = {
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
