import { FinanceTreasuryItemModel, FinanceTreasuryItemValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasuryItem";

export class FinanceTreasuryItemService {
  private repository = new Map<string, FinanceTreasuryItemModel>();

  public create(data: Omit<FinanceTreasuryItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasuryItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryItemModel>): FinanceTreasuryItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryItemModel = {
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
