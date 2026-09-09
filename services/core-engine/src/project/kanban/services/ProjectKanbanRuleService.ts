import { ProjectKanbanRuleModel, ProjectKanbanRuleValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanRule";

export class ProjectKanbanRuleService {
  private repository = new Map<string, ProjectKanbanRuleModel>();

  public create(data: Omit<ProjectKanbanRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanRuleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanRuleModel>): ProjectKanbanRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanRuleModel = {
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
