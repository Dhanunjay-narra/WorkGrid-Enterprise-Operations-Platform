import { FinanceLedgerTaskModel, FinanceLedgerTaskValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerTask";

export class FinanceLedgerTaskService {
  private repository = new Map<string, FinanceLedgerTaskModel>();

  public create(data: Omit<FinanceLedgerTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerTaskModel>): FinanceLedgerTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerTaskModel = {
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
