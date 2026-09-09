import { FinanceBillsItemModel, FinanceBillsItemValidator } from "@nexora/types/domains/finance/bills/FinanceBillsItem";

export class FinanceBillsItemService {
  private repository = new Map<string, FinanceBillsItemModel>();

  public create(data: Omit<FinanceBillsItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsItemModel>): FinanceBillsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsItemModel = {
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
