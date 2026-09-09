import { InventoryStockEventModel, InventoryStockEventValidator } from "@nexora/types/domains/inventory/stock/InventoryStockEvent";

export class InventoryStockEventService {
  private repository = new Map<string, InventoryStockEventModel>();

  public create(data: Omit<InventoryStockEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockEventModel>): InventoryStockEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockEventModel = {
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
