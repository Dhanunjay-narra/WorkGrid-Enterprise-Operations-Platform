import { ProjectEpicsRuleModel, ProjectEpicsRuleValidator } from "@nexora/types/domains/project/epics/ProjectEpicsRule";

export class ProjectEpicsRuleService {
  private repository = new Map<string, ProjectEpicsRuleModel>();

  public create(data: Omit<ProjectEpicsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsRuleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsRuleModel>): ProjectEpicsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsRuleModel = {
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
