import { InventorySuppliersSnapshotModel, InventorySuppliersSnapshotValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersSnapshot";

export class InventorySuppliersSnapshotService {
  private repository = new Map<string, InventorySuppliersSnapshotModel>();

  public create(data: Omit<InventorySuppliersSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersSnapshotModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersSnapshotModel>): InventorySuppliersSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersSnapshotModel = {
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
