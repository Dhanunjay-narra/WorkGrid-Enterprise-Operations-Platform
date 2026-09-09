import { InventoryTransfersQueueModel, InventoryTransfersQueueValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersQueue";

export class InventoryTransfersQueueService {
  private repository = new Map<string, InventoryTransfersQueueModel>();

  public create(data: Omit<InventoryTransfersQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersQueueModel>): InventoryTransfersQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersQueueModel = {
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
