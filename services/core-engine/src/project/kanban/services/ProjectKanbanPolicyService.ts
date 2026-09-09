import { ProjectKanbanPolicyModel, ProjectKanbanPolicyValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanPolicy";

export class ProjectKanbanPolicyService {
  private repository = new Map<string, ProjectKanbanPolicyModel>();

  public create(data: Omit<ProjectKanbanPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanPolicyModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanPolicyModel>): ProjectKanbanPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanPolicyModel = {
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
