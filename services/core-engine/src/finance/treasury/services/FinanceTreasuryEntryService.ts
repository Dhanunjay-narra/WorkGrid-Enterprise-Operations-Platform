import { FinanceTreasuryEntryModel, FinanceTreasuryEntryValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasuryEntry";

export class FinanceTreasuryEntryService {
  private repository = new Map<string, FinanceTreasuryEntryModel>();

  public create(data: Omit<FinanceTreasuryEntryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryEntryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasuryEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryEntryModel>): FinanceTreasuryEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryEntryModel = {
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
