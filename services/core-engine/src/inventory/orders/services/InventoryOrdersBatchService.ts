import { InventoryOrdersBatchModel, InventoryOrdersBatchValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersBatch";

export class InventoryOrdersBatchService {
  private repository = new Map<string, InventoryOrdersBatchModel>();

  public create(data: Omit<InventoryOrdersBatchModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersBatchModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersBatchModel>): InventoryOrdersBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersBatchModel = {
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
