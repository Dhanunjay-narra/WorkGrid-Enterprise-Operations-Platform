import { ProjectSprintsTransactionModel, ProjectSprintsTransactionValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsTransaction";

export class ProjectSprintsTransactionService {
  private repository = new Map<string, ProjectSprintsTransactionModel>();

  public create(data: Omit<ProjectSprintsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsTransactionModel>): ProjectSprintsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsTransactionModel = {
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
