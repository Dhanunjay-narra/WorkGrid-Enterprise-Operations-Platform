import { InventorySkuConfigModel, InventorySkuConfigValidator } from "@nexora/types/domains/inventory/sku/InventorySkuConfig";

export class InventorySkuConfigService {
  private repository = new Map<string, InventorySkuConfigModel>();

  public create(data: Omit<InventorySkuConfigModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuConfigModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuConfigModel>): InventorySkuConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuConfigModel = {
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
