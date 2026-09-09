import { InventorySkuThresholdModel, InventorySkuThresholdValidator } from "@nexora/types/domains/inventory/sku/InventorySkuThreshold";

export class InventorySkuThresholdService {
  private repository = new Map<string, InventorySkuThresholdModel>();

  public create(data: Omit<InventorySkuThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuThresholdModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuThresholdModel>): InventorySkuThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuThresholdModel = {
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
