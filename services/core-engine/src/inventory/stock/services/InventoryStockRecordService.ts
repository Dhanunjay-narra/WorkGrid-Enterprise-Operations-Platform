import { InventoryStockRecordModel, InventoryStockRecordValidator } from "@nexora/types/domains/inventory/stock/InventoryStockRecord";

export class InventoryStockRecordService {
  private repository = new Map<string, InventoryStockRecordModel>();

  public create(data: Omit<InventoryStockRecordModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockRecordModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockRecordModel>): InventoryStockRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockRecordModel = {
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
