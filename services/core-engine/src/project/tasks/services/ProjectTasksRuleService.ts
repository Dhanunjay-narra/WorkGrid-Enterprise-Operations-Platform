import { ProjectTasksRuleModel, ProjectTasksRuleValidator } from "@nexora/types/domains/project/tasks/ProjectTasksRule";

export class ProjectTasksRuleService {
  private repository = new Map<string, ProjectTasksRuleModel>();

  public create(data: Omit<ProjectTasksRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksRuleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksRuleModel>): ProjectTasksRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksRuleModel = {
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
