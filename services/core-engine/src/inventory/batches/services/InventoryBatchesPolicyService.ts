import { InventoryBatchesPolicyModel, InventoryBatchesPolicyValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesPolicy";

export class InventoryBatchesPolicyService {
  private repository = new Map<string, InventoryBatchesPolicyModel>();

  public create(data: Omit<InventoryBatchesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesPolicyModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesPolicyModel>): InventoryBatchesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesPolicyModel = {
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
