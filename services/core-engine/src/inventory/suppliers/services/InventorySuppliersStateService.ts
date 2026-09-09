import { InventorySuppliersStateModel, InventorySuppliersStateValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersState";

export class InventorySuppliersStateService {
  private repository = new Map<string, InventorySuppliersStateModel>();

  public create(data: Omit<InventorySuppliersStateModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersStateModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersStateModel>): InventorySuppliersStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersStateModel = {
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
