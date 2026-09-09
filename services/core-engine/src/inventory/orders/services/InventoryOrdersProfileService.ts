import { InventoryOrdersProfileModel, InventoryOrdersProfileValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersProfile";

export class InventoryOrdersProfileService {
  private repository = new Map<string, InventoryOrdersProfileModel>();

  public create(data: Omit<InventoryOrdersProfileModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersProfileModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersProfileModel>): InventoryOrdersProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersProfileModel = {
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
