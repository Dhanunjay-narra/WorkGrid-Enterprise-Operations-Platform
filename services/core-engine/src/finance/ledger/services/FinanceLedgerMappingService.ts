import { FinanceLedgerMappingModel, FinanceLedgerMappingValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerMapping";

export class FinanceLedgerMappingService {
  private repository = new Map<string, FinanceLedgerMappingModel>();

  public create(data: Omit<FinanceLedgerMappingModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerMappingModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerMappingModel>): FinanceLedgerMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerMappingModel = {
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
