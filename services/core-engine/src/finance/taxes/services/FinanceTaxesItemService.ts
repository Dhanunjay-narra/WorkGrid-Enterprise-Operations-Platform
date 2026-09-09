import { FinanceTaxesItemModel, FinanceTaxesItemValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesItem";

export class FinanceTaxesItemService {
  private repository = new Map<string, FinanceTaxesItemModel>();

  public create(data: Omit<FinanceTaxesItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesItemModel>): FinanceTaxesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesItemModel = {
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
