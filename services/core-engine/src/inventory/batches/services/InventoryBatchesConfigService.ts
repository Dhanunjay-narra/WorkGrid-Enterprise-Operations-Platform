import { InventoryBatchesConfigModel, InventoryBatchesConfigValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesConfig";

export class InventoryBatchesConfigService {
  private repository = new Map<string, InventoryBatchesConfigModel>();

  public create(data: Omit<InventoryBatchesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesConfigModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesConfigModel>): InventoryBatchesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesConfigModel = {
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
