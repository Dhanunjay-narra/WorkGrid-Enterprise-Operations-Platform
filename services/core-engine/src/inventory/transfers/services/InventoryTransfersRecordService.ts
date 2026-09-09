import { InventoryTransfersRecordModel, InventoryTransfersRecordValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersRecord";

export class InventoryTransfersRecordService {
  private repository = new Map<string, InventoryTransfersRecordModel>();

  public create(data: Omit<InventoryTransfersRecordModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersRecordModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersRecordModel>): InventoryTransfersRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersRecordModel = {
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
