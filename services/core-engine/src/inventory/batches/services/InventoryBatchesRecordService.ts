import { InventoryBatchesRecordModel, InventoryBatchesRecordValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesRecord";

export class InventoryBatchesRecordService {
  private repository = new Map<string, InventoryBatchesRecordModel>();

  public create(data: Omit<InventoryBatchesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesRecordModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesRecordModel>): InventoryBatchesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesRecordModel = {
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
