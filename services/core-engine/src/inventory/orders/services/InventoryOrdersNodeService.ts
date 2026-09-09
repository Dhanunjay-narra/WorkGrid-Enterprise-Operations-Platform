import { InventoryOrdersNodeModel, InventoryOrdersNodeValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersNode";

export class InventoryOrdersNodeService {
  private repository = new Map<string, InventoryOrdersNodeModel>();

  public create(data: Omit<InventoryOrdersNodeModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersNodeModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersNodeModel>): InventoryOrdersNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersNodeModel = {
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
