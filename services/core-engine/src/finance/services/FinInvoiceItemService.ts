import { FinInvoiceItemData, FinInvoiceItemValidator } from "../../../../packages/types/src/domains/finance/FinInvoiceItem";

export class FinInvoiceItemService {
  private repository = new Map<string, FinInvoiceItemData>();

  public create(data: Omit<FinInvoiceItemData, "id" | "createdAt" | "updatedAt">): FinInvoiceItemData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinInvoiceItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinInvoiceItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinInvoiceItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinInvoiceItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinInvoiceItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinInvoiceItemData>): FinInvoiceItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinInvoiceItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
