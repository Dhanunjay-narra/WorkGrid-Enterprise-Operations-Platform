import { InventorySkuPayloadModel, InventorySkuPayloadValidator } from "@nexora/types/domains/inventory/sku/InventorySkuPayload";

export class InventorySkuPayloadService {
  private repository = new Map<string, InventorySkuPayloadModel>();

  public create(data: Omit<InventorySkuPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuPayloadModel>): InventorySkuPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuPayloadModel = {
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
