import { BiQueriesTransactionModel, BiQueriesTransactionValidator } from "@nexora/types/domains/bi/queries/BiQueriesTransaction";

export class BiQueriesTransactionService {
  private repository = new Map<string, BiQueriesTransactionModel>();

  public create(data: Omit<BiQueriesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesTransactionModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesTransactionModel>): BiQueriesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesTransactionModel = {
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
