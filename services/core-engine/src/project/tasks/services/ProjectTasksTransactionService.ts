import { ProjectTasksTransactionModel, ProjectTasksTransactionValidator } from "@nexora/types/domains/project/tasks/ProjectTasksTransaction";

export class ProjectTasksTransactionService {
  private repository = new Map<string, ProjectTasksTransactionModel>();

  public create(data: Omit<ProjectTasksTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksTransactionModel>): ProjectTasksTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksTransactionModel = {
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
