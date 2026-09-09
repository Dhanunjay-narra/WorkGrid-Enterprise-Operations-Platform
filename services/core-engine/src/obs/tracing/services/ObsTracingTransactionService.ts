import { ObsTracingTransactionModel, ObsTracingTransactionValidator } from "@nexora/types/domains/obs/tracing/ObsTracingTransaction";

export class ObsTracingTransactionService {
  private repository = new Map<string, ObsTracingTransactionModel>();

  public create(data: Omit<ObsTracingTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingTransactionModel>): ObsTracingTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingTransactionModel = {
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
