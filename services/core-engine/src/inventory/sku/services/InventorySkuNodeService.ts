import { InventorySkuNodeModel, InventorySkuNodeValidator } from "@nexora/types/domains/inventory/sku/InventorySkuNode";

export class InventorySkuNodeService {
  private repository = new Map<string, InventorySkuNodeModel>();

  public create(data: Omit<InventorySkuNodeModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuNodeModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuNodeModel>): InventorySkuNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuNodeModel = {
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
