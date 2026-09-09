import { IntRateLimitsTransactionModel, IntRateLimitsTransactionValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsTransaction";

export class IntRateLimitsTransactionService {
  private repository = new Map<string, IntRateLimitsTransactionModel>();

  public create(data: Omit<IntRateLimitsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsTransactionModel>): IntRateLimitsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsTransactionModel = {
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
