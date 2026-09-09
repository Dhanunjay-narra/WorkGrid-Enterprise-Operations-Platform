import { InventoryBatchesProfileModel, InventoryBatchesProfileValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesProfile";

export class InventoryBatchesProfileService {
  private repository = new Map<string, InventoryBatchesProfileModel>();

  public create(data: Omit<InventoryBatchesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesProfileModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesProfileModel>): InventoryBatchesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesProfileModel = {
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
