import { FinanceBankingBatchModel, FinanceBankingBatchValidator } from "@nexora/types/domains/finance/banking/FinanceBankingBatch";

export class FinanceBankingBatchService {
  private repository = new Map<string, FinanceBankingBatchModel>();

  public create(data: Omit<FinanceBankingBatchModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingBatchModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingBatchModel>): FinanceBankingBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingBatchModel = {
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
