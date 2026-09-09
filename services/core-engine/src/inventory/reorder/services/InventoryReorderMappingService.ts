import { InventoryReorderMappingModel, InventoryReorderMappingValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderMapping";

export class InventoryReorderMappingService {
  private repository = new Map<string, InventoryReorderMappingModel>();

  public create(data: Omit<InventoryReorderMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderMappingModel>): InventoryReorderMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderMappingModel = {
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
