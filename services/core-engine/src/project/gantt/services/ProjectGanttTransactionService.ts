import { ProjectGanttTransactionModel, ProjectGanttTransactionValidator } from "@nexora/types/domains/project/gantt/ProjectGanttTransaction";

export class ProjectGanttTransactionService {
  private repository = new Map<string, ProjectGanttTransactionModel>();

  public create(data: Omit<ProjectGanttTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttTransactionModel>): ProjectGanttTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttTransactionModel = {
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
