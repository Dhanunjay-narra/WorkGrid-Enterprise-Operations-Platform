import { ProjectCapacityTransactionModel, ProjectCapacityTransactionValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityTransaction";

export class ProjectCapacityTransactionService {
  private repository = new Map<string, ProjectCapacityTransactionModel>();

  public create(data: Omit<ProjectCapacityTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityTransactionModel>): ProjectCapacityTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityTransactionModel = {
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
