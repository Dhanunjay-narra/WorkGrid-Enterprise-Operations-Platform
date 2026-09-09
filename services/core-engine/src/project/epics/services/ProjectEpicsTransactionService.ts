import { ProjectEpicsTransactionModel, ProjectEpicsTransactionValidator } from "@nexora/types/domains/project/epics/ProjectEpicsTransaction";

export class ProjectEpicsTransactionService {
  private repository = new Map<string, ProjectEpicsTransactionModel>();

  public create(data: Omit<ProjectEpicsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsTransactionModel>): ProjectEpicsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsTransactionModel = {
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
