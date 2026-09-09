import { InventoryTransfersThresholdModel, InventoryTransfersThresholdValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersThreshold";

export class InventoryTransfersThresholdService {
  private repository = new Map<string, InventoryTransfersThresholdModel>();

  public create(data: Omit<InventoryTransfersThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersThresholdModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersThresholdModel>): InventoryTransfersThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersThresholdModel = {
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
