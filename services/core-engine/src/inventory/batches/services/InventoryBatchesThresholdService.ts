import { InventoryBatchesThresholdModel, InventoryBatchesThresholdValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesThreshold";

export class InventoryBatchesThresholdService {
  private repository = new Map<string, InventoryBatchesThresholdModel>();

  public create(data: Omit<InventoryBatchesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesThresholdModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesThresholdModel>): InventoryBatchesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesThresholdModel = {
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
