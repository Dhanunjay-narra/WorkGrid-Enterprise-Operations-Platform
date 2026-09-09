import { InventoryOrdersMappingModel, InventoryOrdersMappingValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersMapping";

export class InventoryOrdersMappingService {
  private repository = new Map<string, InventoryOrdersMappingModel>();

  public create(data: Omit<InventoryOrdersMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersMappingModel>): InventoryOrdersMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersMappingModel = {
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
