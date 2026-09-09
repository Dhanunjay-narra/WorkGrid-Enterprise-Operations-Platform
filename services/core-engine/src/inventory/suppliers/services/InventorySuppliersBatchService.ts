import { InventorySuppliersBatchModel, InventorySuppliersBatchValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersBatch";

export class InventorySuppliersBatchService {
  private repository = new Map<string, InventorySuppliersBatchModel>();

  public create(data: Omit<InventorySuppliersBatchModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersBatchModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersBatchModel>): InventorySuppliersBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersBatchModel = {
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
