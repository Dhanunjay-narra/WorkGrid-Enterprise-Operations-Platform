import { InventoryReorderMetricModel, InventoryReorderMetricValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderMetric";

export class InventoryReorderMetricService {
  private repository = new Map<string, InventoryReorderMetricModel>();

  public create(data: Omit<InventoryReorderMetricModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderMetricModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderMetricModel>): InventoryReorderMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderMetricModel = {
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
