import { InventorySuppliersEventModel, InventorySuppliersEventValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersEvent";

export class InventorySuppliersEventService {
  private repository = new Map<string, InventorySuppliersEventModel>();

  public create(data: Omit<InventorySuppliersEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersEventModel>): InventorySuppliersEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersEventModel = {
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
