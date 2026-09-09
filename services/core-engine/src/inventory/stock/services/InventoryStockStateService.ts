import { InventoryStockStateModel, InventoryStockStateValidator } from "@nexora/types/domains/inventory/stock/InventoryStockState";

export class InventoryStockStateService {
  private repository = new Map<string, InventoryStockStateModel>();

  public create(data: Omit<InventoryStockStateModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockStateModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockStateModel>): InventoryStockStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockStateModel = {
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
