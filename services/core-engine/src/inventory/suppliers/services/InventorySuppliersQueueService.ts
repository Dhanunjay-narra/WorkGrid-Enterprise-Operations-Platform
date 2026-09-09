import { InventorySuppliersQueueModel, InventorySuppliersQueueValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersQueue";

export class InventorySuppliersQueueService {
  private repository = new Map<string, InventorySuppliersQueueModel>();

  public create(data: Omit<InventorySuppliersQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersQueueModel>): InventorySuppliersQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersQueueModel = {
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
