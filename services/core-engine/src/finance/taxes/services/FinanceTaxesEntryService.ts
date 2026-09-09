import { FinanceTaxesEntryModel, FinanceTaxesEntryValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesEntry";

export class FinanceTaxesEntryService {
  private repository = new Map<string, FinanceTaxesEntryModel>();

  public create(data: Omit<FinanceTaxesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesEntryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesEntryModel>): FinanceTaxesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesEntryModel = {
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
