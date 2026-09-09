import { ProjectRisksRuleModel, ProjectRisksRuleValidator } from "@nexora/types/domains/project/risks/ProjectRisksRule";

export class ProjectRisksRuleService {
  private repository = new Map<string, ProjectRisksRuleModel>();

  public create(data: Omit<ProjectRisksRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksRuleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksRuleModel>): ProjectRisksRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksRuleModel = {
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
