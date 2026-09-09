import { InventoryOrdersQueueModel, InventoryOrdersQueueValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersQueue";

export class InventoryOrdersQueueService {
  private repository = new Map<string, InventoryOrdersQueueModel>();

  public create(data: Omit<InventoryOrdersQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersQueueModel>): InventoryOrdersQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersQueueModel = {
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
