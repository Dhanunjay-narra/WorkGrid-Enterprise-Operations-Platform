import { InventoryBatchesEventModel, InventoryBatchesEventValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesEvent";

export class InventoryBatchesEventService {
  private repository = new Map<string, InventoryBatchesEventModel>();

  public create(data: Omit<InventoryBatchesEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesEventModel>): InventoryBatchesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesEventModel = {
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
