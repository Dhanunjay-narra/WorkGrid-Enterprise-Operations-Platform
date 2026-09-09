import { InventoryTransfersStateModel, InventoryTransfersStateValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersState";

export class InventoryTransfersStateService {
  private repository = new Map<string, InventoryTransfersStateModel>();

  public create(data: Omit<InventoryTransfersStateModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersStateModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersStateModel>): InventoryTransfersStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersStateModel = {
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
