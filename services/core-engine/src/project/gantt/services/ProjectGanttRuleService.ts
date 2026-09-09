import { ProjectGanttRuleModel, ProjectGanttRuleValidator } from "@nexora/types/domains/project/gantt/ProjectGanttRule";

export class ProjectGanttRuleService {
  private repository = new Map<string, ProjectGanttRuleModel>();

  public create(data: Omit<ProjectGanttRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttRuleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttRuleModel>): ProjectGanttRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttRuleModel = {
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
