import { ProjectRisksConfigModel, ProjectRisksConfigValidator } from "@nexora/types/domains/project/risks/ProjectRisksConfig";

export class ProjectRisksConfigService {
  private repository = new Map<string, ProjectRisksConfigModel>();

  public create(data: Omit<ProjectRisksConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksConfigModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksConfigModel>): ProjectRisksConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksConfigModel = {
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
