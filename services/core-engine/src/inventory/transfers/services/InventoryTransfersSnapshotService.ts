import { InventoryTransfersSnapshotModel, InventoryTransfersSnapshotValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersSnapshot";

export class InventoryTransfersSnapshotService {
  private repository = new Map<string, InventoryTransfersSnapshotModel>();

  public create(data: Omit<InventoryTransfersSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersSnapshotModel>): InventoryTransfersSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersSnapshotModel = {
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
