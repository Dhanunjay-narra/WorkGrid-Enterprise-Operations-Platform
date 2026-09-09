import { InventoryBatchesEntryModel, InventoryBatchesEntryValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesEntry";

export class InventoryBatchesEntryService {
  private repository = new Map<string, InventoryBatchesEntryModel>();

  public create(data: Omit<InventoryBatchesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesEntryModel>): InventoryBatchesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesEntryModel = {
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
