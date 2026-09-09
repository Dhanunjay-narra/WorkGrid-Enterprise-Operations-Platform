import { FinanceBankingTaskModel, FinanceBankingTaskValidator } from "@nexora/types/domains/finance/banking/FinanceBankingTask";

export class FinanceBankingTaskService {
  private repository = new Map<string, FinanceBankingTaskModel>();

  public create(data: Omit<FinanceBankingTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingTaskModel>): FinanceBankingTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingTaskModel = {
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
