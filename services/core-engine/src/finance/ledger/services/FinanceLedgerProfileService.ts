import { FinanceLedgerProfileModel, FinanceLedgerProfileValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerProfile";

export class FinanceLedgerProfileService {
  private repository = new Map<string, FinanceLedgerProfileModel>();

  public create(data: Omit<FinanceLedgerProfileModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerProfileModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerProfileModel>): FinanceLedgerProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerProfileModel = {
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
