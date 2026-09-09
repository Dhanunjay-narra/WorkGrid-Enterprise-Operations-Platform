import { InventoryOrdersEventModel, InventoryOrdersEventValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersEvent";

export class InventoryOrdersEventService {
  private repository = new Map<string, InventoryOrdersEventModel>();

  public create(data: Omit<InventoryOrdersEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersEventModel>): InventoryOrdersEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersEventModel = {
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
