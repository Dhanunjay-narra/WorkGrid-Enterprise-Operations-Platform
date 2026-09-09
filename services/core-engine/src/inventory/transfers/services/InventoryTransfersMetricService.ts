import { InventoryTransfersMetricModel, InventoryTransfersMetricValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersMetric";

export class InventoryTransfersMetricService {
  private repository = new Map<string, InventoryTransfersMetricModel>();

  public create(data: Omit<InventoryTransfersMetricModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersMetricModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersMetricModel>): InventoryTransfersMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersMetricModel = {
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
