import { InventoryReorderEventModel, InventoryReorderEventValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderEvent";

export class InventoryReorderEventService {
  private repository = new Map<string, InventoryReorderEventModel>();

  public create(data: Omit<InventoryReorderEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderEventModel>): InventoryReorderEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderEventModel = {
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
