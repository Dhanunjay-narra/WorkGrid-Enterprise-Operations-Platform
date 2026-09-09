import { ObsLoggingTransactionModel, ObsLoggingTransactionValidator } from "@nexora/types/domains/obs/logging/ObsLoggingTransaction";

export class ObsLoggingTransactionService {
  private repository = new Map<string, ObsLoggingTransactionModel>();

  public create(data: Omit<ObsLoggingTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingTransactionModel>): ObsLoggingTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingTransactionModel = {
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
