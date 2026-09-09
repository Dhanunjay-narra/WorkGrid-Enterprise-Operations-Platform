import { InventoryReorderStateModel, InventoryReorderStateValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderState";

export class InventoryReorderStateService {
  private repository = new Map<string, InventoryReorderStateModel>();

  public create(data: Omit<InventoryReorderStateModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderStateModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderStateModel>): InventoryReorderStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderStateModel = {
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
