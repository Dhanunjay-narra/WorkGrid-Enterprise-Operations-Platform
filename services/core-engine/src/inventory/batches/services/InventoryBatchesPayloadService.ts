import { InventoryBatchesPayloadModel, InventoryBatchesPayloadValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesPayload";

export class InventoryBatchesPayloadService {
  private repository = new Map<string, InventoryBatchesPayloadModel>();

  public create(data: Omit<InventoryBatchesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesPayloadModel>): InventoryBatchesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesPayloadModel = {
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
