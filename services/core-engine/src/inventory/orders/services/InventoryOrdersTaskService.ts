import { InventoryOrdersTaskModel, InventoryOrdersTaskValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersTask";

export class InventoryOrdersTaskService {
  private repository = new Map<string, InventoryOrdersTaskModel>();

  public create(data: Omit<InventoryOrdersTaskModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersTaskModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersTaskModel>): InventoryOrdersTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersTaskModel = {
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
