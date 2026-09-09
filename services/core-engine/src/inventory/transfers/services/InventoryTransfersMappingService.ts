import { InventoryTransfersMappingModel, InventoryTransfersMappingValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersMapping";

export class InventoryTransfersMappingService {
  private repository = new Map<string, InventoryTransfersMappingModel>();

  public create(data: Omit<InventoryTransfersMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersMappingModel>): InventoryTransfersMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersMappingModel = {
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
