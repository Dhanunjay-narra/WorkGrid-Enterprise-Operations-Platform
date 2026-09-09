import { FinanceInvoicesItemModel, FinanceInvoicesItemValidator } from "@nexora/types/domains/finance/invoices/FinanceInvoicesItem";

export class FinanceInvoicesItemService {
  private repository = new Map<string, FinanceInvoicesItemModel>();

  public create(data: Omit<FinanceInvoicesItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceInvoicesItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceInvoicesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceInvoicesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceInvoicesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceInvoicesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceInvoicesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceInvoicesItemModel>): FinanceInvoicesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceInvoicesItemModel = {
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
