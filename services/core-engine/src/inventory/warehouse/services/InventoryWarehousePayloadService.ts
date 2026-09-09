import { InventoryWarehousePayloadModel, InventoryWarehousePayloadValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehousePayload";

export class InventoryWarehousePayloadService {
  private repository = new Map<string, InventoryWarehousePayloadModel>();

  public create(data: Omit<InventoryWarehousePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehousePayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehousePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehousePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehousePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehousePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehousePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehousePayloadModel>): InventoryWarehousePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehousePayloadModel = {
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
