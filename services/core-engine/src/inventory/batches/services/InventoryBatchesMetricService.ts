import { InventoryBatchesMetricModel, InventoryBatchesMetricValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesMetric";

export class InventoryBatchesMetricService {
  private repository = new Map<string, InventoryBatchesMetricModel>();

  public create(data: Omit<InventoryBatchesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesMetricModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesMetricModel>): InventoryBatchesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesMetricModel = {
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
