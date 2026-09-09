import { InventoryBatchesSnapshotModel, InventoryBatchesSnapshotValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesSnapshot";

export class InventoryBatchesSnapshotService {
  private repository = new Map<string, InventoryBatchesSnapshotModel>();

  public create(data: Omit<InventoryBatchesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesSnapshotModel>): InventoryBatchesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesSnapshotModel = {
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
