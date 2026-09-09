import { InventoryTransfersProfileModel, InventoryTransfersProfileValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersProfile";

export class InventoryTransfersProfileService {
  private repository = new Map<string, InventoryTransfersProfileModel>();

  public create(data: Omit<InventoryTransfersProfileModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersProfileModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersProfileModel>): InventoryTransfersProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersProfileModel = {
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
