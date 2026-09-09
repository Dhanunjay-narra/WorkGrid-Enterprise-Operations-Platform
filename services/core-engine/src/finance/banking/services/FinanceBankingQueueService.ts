import { FinanceBankingQueueModel, FinanceBankingQueueValidator } from "@nexora/types/domains/finance/banking/FinanceBankingQueue";

export class FinanceBankingQueueService {
  private repository = new Map<string, FinanceBankingQueueModel>();

  public create(data: Omit<FinanceBankingQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingQueueModel>): FinanceBankingQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingQueueModel = {
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
