import { FinanceLedgerConfigModel, FinanceLedgerConfigValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerConfig";

export class FinanceLedgerConfigService {
  private repository = new Map<string, FinanceLedgerConfigModel>();

  public create(data: Omit<FinanceLedgerConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerConfigModel>): FinanceLedgerConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerConfigModel = {
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
