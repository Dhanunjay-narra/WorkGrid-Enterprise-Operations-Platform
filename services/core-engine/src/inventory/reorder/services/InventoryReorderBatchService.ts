import { InventoryReorderBatchModel, InventoryReorderBatchValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderBatch";

export class InventoryReorderBatchService {
  private repository = new Map<string, InventoryReorderBatchModel>();

  public create(data: Omit<InventoryReorderBatchModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderBatchModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderBatchModel>): InventoryReorderBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderBatchModel = {
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
