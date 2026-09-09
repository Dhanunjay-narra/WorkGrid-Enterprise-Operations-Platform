import { InventoryStockNodeModel, InventoryStockNodeValidator } from "@nexora/types/domains/inventory/stock/InventoryStockNode";

export class InventoryStockNodeService {
  private repository = new Map<string, InventoryStockNodeModel>();

  public create(data: Omit<InventoryStockNodeModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockNodeModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockNodeModel>): InventoryStockNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockNodeModel = {
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
