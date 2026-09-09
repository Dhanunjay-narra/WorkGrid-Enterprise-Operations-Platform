import { InventoryStockSummaryModel, InventoryStockSummaryValidator } from "@nexora/types/domains/inventory/stock/InventoryStockSummary";

export class InventoryStockSummaryService {
  private repository = new Map<string, InventoryStockSummaryModel>();

  public create(data: Omit<InventoryStockSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockSummaryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockSummaryModel>): InventoryStockSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockSummaryModel = {
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
