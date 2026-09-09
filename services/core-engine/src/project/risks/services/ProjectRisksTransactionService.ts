import { ProjectRisksTransactionModel, ProjectRisksTransactionValidator } from "@nexora/types/domains/project/risks/ProjectRisksTransaction";

export class ProjectRisksTransactionService {
  private repository = new Map<string, ProjectRisksTransactionModel>();

  public create(data: Omit<ProjectRisksTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksTransactionModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksTransactionModel>): ProjectRisksTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksTransactionModel = {
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
