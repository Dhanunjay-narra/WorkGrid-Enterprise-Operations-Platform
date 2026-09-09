import { InventorySkuMappingModel, InventorySkuMappingValidator } from "@nexora/types/domains/inventory/sku/InventorySkuMapping";

export class InventorySkuMappingService {
  private repository = new Map<string, InventorySkuMappingModel>();

  public create(data: Omit<InventorySkuMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuMappingModel>): InventorySkuMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuMappingModel = {
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
