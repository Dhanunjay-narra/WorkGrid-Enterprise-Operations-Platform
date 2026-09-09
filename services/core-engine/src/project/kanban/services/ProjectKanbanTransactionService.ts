import { ProjectKanbanTransactionModel, ProjectKanbanTransactionValidator } from "@nexora/types/domains/project/kanban/ProjectKanbanTransaction";

export class ProjectKanbanTransactionService {
  private repository = new Map<string, ProjectKanbanTransactionModel>();

  public create(data: Omit<ProjectKanbanTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectKanbanTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectKanbanTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectKanbanTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectKanbanTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectKanbanTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectKanbanTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectKanbanTransactionModel>): ProjectKanbanTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectKanbanTransactionModel = {
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
