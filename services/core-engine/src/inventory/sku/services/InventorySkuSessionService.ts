import { InventorySkuSessionModel, InventorySkuSessionValidator } from "@nexora/types/domains/inventory/sku/InventorySkuSession";

export class InventorySkuSessionService {
  private repository = new Map<string, InventorySkuSessionModel>();

  public create(data: Omit<InventorySkuSessionModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuSessionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuSessionModel>): InventorySkuSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuSessionModel = {
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
