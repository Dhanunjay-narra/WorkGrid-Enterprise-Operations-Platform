import { InventoryReorderPayloadModel, InventoryReorderPayloadValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderPayload";

export class InventoryReorderPayloadService {
  private repository = new Map<string, InventoryReorderPayloadModel>();

  public create(data: Omit<InventoryReorderPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderPayloadModel>): InventoryReorderPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderPayloadModel = {
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
