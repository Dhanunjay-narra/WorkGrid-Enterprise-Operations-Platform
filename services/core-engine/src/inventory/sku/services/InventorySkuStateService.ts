import { InventorySkuStateModel, InventorySkuStateValidator } from "@nexora/types/domains/inventory/sku/InventorySkuState";

export class InventorySkuStateService {
  private repository = new Map<string, InventorySkuStateModel>();

  public create(data: Omit<InventorySkuStateModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuStateModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuStateModel>): InventorySkuStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuStateModel = {
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
