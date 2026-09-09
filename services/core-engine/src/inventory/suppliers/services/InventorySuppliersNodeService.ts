import { InventorySuppliersNodeModel, InventorySuppliersNodeValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersNode";

export class InventorySuppliersNodeService {
  private repository = new Map<string, InventorySuppliersNodeModel>();

  public create(data: Omit<InventorySuppliersNodeModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersNodeModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersNodeModel>): InventorySuppliersNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersNodeModel = {
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
