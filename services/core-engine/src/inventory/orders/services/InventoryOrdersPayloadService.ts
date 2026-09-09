import { InventoryOrdersPayloadModel, InventoryOrdersPayloadValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersPayload";

export class InventoryOrdersPayloadService {
  private repository = new Map<string, InventoryOrdersPayloadModel>();

  public create(data: Omit<InventoryOrdersPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersPayloadModel>): InventoryOrdersPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersPayloadModel = {
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
