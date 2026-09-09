import { InventorySuppliersPayloadModel, InventorySuppliersPayloadValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersPayload";

export class InventorySuppliersPayloadService {
  private repository = new Map<string, InventorySuppliersPayloadModel>();

  public create(data: Omit<InventorySuppliersPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersPayloadModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersPayloadModel>): InventorySuppliersPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersPayloadModel = {
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
