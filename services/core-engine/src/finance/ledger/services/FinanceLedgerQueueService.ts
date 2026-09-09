import { FinanceLedgerQueueModel, FinanceLedgerQueueValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerQueue";

export class FinanceLedgerQueueService {
  private repository = new Map<string, FinanceLedgerQueueModel>();

  public create(data: Omit<FinanceLedgerQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerQueueModel>): FinanceLedgerQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerQueueModel = {
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
