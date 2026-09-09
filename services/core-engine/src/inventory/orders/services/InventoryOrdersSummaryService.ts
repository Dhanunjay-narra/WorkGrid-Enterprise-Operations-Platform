import { InventoryOrdersSummaryModel, InventoryOrdersSummaryValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersSummary";

export class InventoryOrdersSummaryService {
  private repository = new Map<string, InventoryOrdersSummaryModel>();

  public create(data: Omit<InventoryOrdersSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersSummaryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersSummaryModel>): InventoryOrdersSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersSummaryModel = {
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
