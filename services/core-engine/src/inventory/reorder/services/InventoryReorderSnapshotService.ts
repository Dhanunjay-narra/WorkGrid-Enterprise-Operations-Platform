import { InventoryReorderSnapshotModel, InventoryReorderSnapshotValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderSnapshot";

export class InventoryReorderSnapshotService {
  private repository = new Map<string, InventoryReorderSnapshotModel>();

  public create(data: Omit<InventoryReorderSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderSnapshotModel>): InventoryReorderSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderSnapshotModel = {
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
