import { InventorySuppliersSessionModel, InventorySuppliersSessionValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersSession";

export class InventorySuppliersSessionService {
  private repository = new Map<string, InventorySuppliersSessionModel>();

  public create(data: Omit<InventorySuppliersSessionModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersSessionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersSessionModel>): InventorySuppliersSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersSessionModel = {
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
