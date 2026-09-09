import { InventoryBatchesTaskModel, InventoryBatchesTaskValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesTask";

export class InventoryBatchesTaskService {
  private repository = new Map<string, InventoryBatchesTaskModel>();

  public create(data: Omit<InventoryBatchesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesTaskModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesTaskModel>): InventoryBatchesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesTaskModel = {
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
