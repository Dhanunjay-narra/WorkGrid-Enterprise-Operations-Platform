import { InventorySkuTaskModel, InventorySkuTaskValidator } from "@nexora/types/domains/inventory/sku/InventorySkuTask";

export class InventorySkuTaskService {
  private repository = new Map<string, InventorySkuTaskModel>();

  public create(data: Omit<InventorySkuTaskModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuTaskModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuTaskModel>): InventorySkuTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuTaskModel = {
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
