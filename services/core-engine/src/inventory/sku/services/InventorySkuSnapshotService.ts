import { InventorySkuSnapshotModel, InventorySkuSnapshotValidator } from "@nexora/types/domains/inventory/sku/InventorySkuSnapshot";

export class InventorySkuSnapshotService {
  private repository = new Map<string, InventorySkuSnapshotModel>();

  public create(data: Omit<InventorySkuSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuSnapshotModel>): InventorySkuSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuSnapshotModel = {
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
