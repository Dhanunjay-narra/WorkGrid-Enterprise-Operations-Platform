import { InventorySuppliersMetricModel, InventorySuppliersMetricValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersMetric";

export class InventorySuppliersMetricService {
  private repository = new Map<string, InventorySuppliersMetricModel>();

  public create(data: Omit<InventorySuppliersMetricModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersMetricModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersMetricModel>): InventorySuppliersMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersMetricModel = {
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
