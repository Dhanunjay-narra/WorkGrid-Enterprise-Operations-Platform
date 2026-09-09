import { InventoryStockSnapshotModel, InventoryStockSnapshotValidator } from "@nexora/types/domains/inventory/stock/InventoryStockSnapshot";

export class InventoryStockSnapshotService {
  private repository = new Map<string, InventoryStockSnapshotModel>();

  public create(data: Omit<InventoryStockSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockSnapshotModel>): InventoryStockSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockSnapshotModel = {
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
