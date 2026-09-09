import { BiAnomaliesTransactionModel, BiAnomaliesTransactionValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesTransaction";

export class BiAnomaliesTransactionService {
  private repository = new Map<string, BiAnomaliesTransactionModel>();

  public create(data: Omit<BiAnomaliesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesTransactionModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesTransactionModel>): BiAnomaliesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesTransactionModel = {
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
