import { InventoryStockPayloadModel, InventoryStockPayloadValidator } from "@nexora/types/domains/inventory/stock/InventoryStockPayload";

export class InventoryStockPayloadService {
  private repository = new Map<string, InventoryStockPayloadModel>();

  public create(data: Omit<InventoryStockPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockPayloadModel>): InventoryStockPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockPayloadModel = {
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
