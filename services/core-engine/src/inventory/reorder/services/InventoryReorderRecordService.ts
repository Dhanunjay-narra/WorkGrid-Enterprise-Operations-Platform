import { InventoryReorderRecordModel, InventoryReorderRecordValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderRecord";

export class InventoryReorderRecordService {
  private repository = new Map<string, InventoryReorderRecordModel>();

  public create(data: Omit<InventoryReorderRecordModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderRecordModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderRecordModel>): InventoryReorderRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderRecordModel = {
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
